import fs from "node:fs/promises";
import bodyParser from "body-parser";
import express from "express";
import multer from "multer";
import path from "path";
import { existsSync, mkdir } from "fs";
import slugify from "slugify";

const app = express();

if (!existsSync("./public/images/")) {
  mkdir("./public/images/");
}

const storage = multer.diskStorage({
  destination: "./public/images/",
  filename: (request, file, callback) => {
    const dishName = request.body.dishName;

    const safeName = dishName ? slugify(dishName, { lower: true }) : Date.now().toString();

    const extension = path.extname(file.originalname);

    callback(null, `${safeName}${extension}`);
  },
});
const upload = multer({ storage });

app.use(express.static("./public"));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // allow all domains
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.get("/users", async (req, res) => {
  const fileContent = await fs.readFile("./data/users.json");
  const users = JSON.parse(fileContent);
  res.status(200).json({ users });
});
app.get("/dishes", async (req, res) => {
  const fileContent = await fs.readFile("./data/dishes.json");
  const dishes = JSON.parse(fileContent);
  res.status(200).json({ dishes });
});

//registo dos pratos
app.post("/dishes", async (req, res) => {
  const fileContent = await fs.readFile("./data/dishes.json");
  const dishes = JSON.parse(fileContent);

  const newDish = req.body;
  dishes.push(newDish);

  await fs.writeFile("./data/dishes.json", JSON.stringify(dishes, null, 2));
  res.status(200).json({ message: "Dishes added!" });
});

app.post("/dishes-images", upload.single("dish-image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Image upload failed." });
  }
  res.json({
    filename: req.file.filename,
    path: req.file.path,
  });
});

//apagar um prato
app.put("/dishes/delete", async (req, res) => {
  const fileContent = await fs.readFile("./data/dishes.json");
  const dishes = JSON.parse(fileContent);

  const dishName = req.body.dishName;
  // console.log(dishName);
  const updatedDishes = dishes.filter((dish) => dish.dishName !== dishName);
  // console.log(updatedDishes);

  await fs.writeFile("./data/dishes.json", JSON.stringify(updatedDishes, null, 2));
  res.status(200).json({ message: "Dishes deleted!" });
});

//registo de pedidos
app.get("/orders", async (req, res) => {
  const orderFileContent = await fs.readFile("./data/user-dishes.json");
  const orders = JSON.parse(orderFileContent);
  const usersFileContent = await fs.readFile("./data/users.json");
  const users = JSON.parse(usersFileContent);

  //{id: {name, dishes, status}, ...}
  const response = {};

  for (let orderId in orders) {
    const order = orders[orderId];
    const userMatches = users.filter((user) => user.email === orders[orderId].email);
    // console.log("userMatches: " + userMatches);
    const user = userMatches[0];
    // console.log("user: " + user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // console.log(user);
    const userName = `${user.firstName} ${user.lastName}`;
    response[orderId] = { name: userName, dishes: order.dishes, status: order.status };
  }
  // console.log(response);

  res.status(200).json({ orders: response });
});

app.post("/orders", async (req, res) => {
  const fileContent = await fs.readFile("./data/user-dishes.json");
  const orders = JSON.parse(fileContent);

  // build order
  const newOrder = { email: req.body.email, dishes: req.body.dishes, status: "pending" };

  // calculate id
  const existingIds = Object.keys(orders).map((id) => parseInt(id));
  const maxId = existingIds.length > 0 ? Math.max(...existingIds) : 0;
  const newId = maxId + 1;

  // update orders
  orders[newId] = newOrder;

  // store
  await fs.writeFile("./data/user-dishes.json", JSON.stringify(orders, null, 2));
  res.status(200).json({ message: "Order added!" });
});

app.put("/orders/advance", async (req, res) => {
  const fileContent = await fs.readFile("./data/user-dishes.json");
  const orders = JSON.parse(fileContent);

  const orderId = req.body.id;

  if (orders[orderId].status === "pending") {
    orders[orderId].status = "cooking";
  } else if (orders[orderId].status === "cooking") {
    orders[orderId].status = "delivered";
  } else {
    delete orders[orderId];
  }

  await fs.writeFile("./data/user-dishes.json", JSON.stringify(orders, null, 2));
  res.status(200).json({ message: "Order updated!" });
});

//rotas de users
//rota de registo
app.post("/signup", async (req, res) => {
  const fileContent = await fs.readFile("./data/users.json");
  const users = JSON.parse(fileContent);

  const newUser = req.body;
  newUser.role = "customer";
  // console.log(newUser);
  users.push(newUser);

  await fs.writeFile("./data/users.json", JSON.stringify(users, null, 2));
  res.status(200).json({ message: "User Inserted!" });
});

//rota de login (verifica se há user e se sim gera um token)
app.post("/login", async (req, res) => {
  const fileContent = await fs.readFile("./data/users.json");
  const users = JSON.parse(fileContent);

  const email = req.body.email;
  const password = req.body.password;

  const login = users.find((u) => u.email === email && u.password === password);

  if (!login) {
    return res.status(422).json({
      message: "Invalid credentials.",
      errors: { credentials: "Invalid email or password entered." },
    });
  }

  const AuthUser = {
    email: login.email,
    firstName: login.firstName,
    role: login.role,
  };

  return res.status(200).json(AuthUser);
});
//Endpoint para mudar o role de um user, de acordo com o seu email.
app.post("/users/edit", async (req, res) => {
  const fileContent = await fs.readFile("./data/users.json");
  const users = JSON.parse(fileContent);

  const email = req.body.email;
  const role = req.body.role;

  //Substituiu os users que estão no JSON e altera o user escolhido
  const newUsers = [];
  for (let user of users) {
    // console.log(user);
    if (user.email === email) {
      user.role = role;
    }
    newUsers.push(user);
  }

  // console.log(newUsers);

  await fs.writeFile("./data/users.json", JSON.stringify(newUsers, null, 2));
  res.status(200).json({ message: "User updated!" });
});

app.listen(3000);
console.log("server listening on 3000");
