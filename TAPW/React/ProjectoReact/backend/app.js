import fs from "node:fs/promises";
import bodyParser from "body-parser";
import express from "express";
import multer from "multer";
import path from "path";
import { existsSync, mkdir } from "fs";
import slugify from "slugify";

const app = express();

//Criar uma pasta para as imagens se não existir uma
//O multer é um middleware do express que trata do carregamento dos ficheiros
if (!existsSync("./public/images/")) {
  mkdir("./public/images/");
}

//Configuração do multer para o upload das imagens
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

// USERS

//Busca todos os utilizadores
app.get("/users", async (req, res) => {
  const fileContent = await fs.readFile("./data/users.json");
  const users = JSON.parse(fileContent);
  res.status(200).json({ users });
});

//Registo dos utilizadores
//Adiciona um utilizador que, por defeito, tem o role "customer" ao users.json
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

//Login dos users
//Verifica as credenciais e retorna a informação do utilizador se for válido
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

//Editar o role de um utilizador
//Modifica o role do utilizador com base no email.
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

//DISHES

//Busca todos os pratos
app.get("/dishes", async (req, res) => {
  const fileContent = await fs.readFile("./data/dishes.json");
  const dishes = JSON.parse(fileContent);
  res.status(200).json({ dishes });
});

//Adiciona um novo prato ao dishes.json
app.post("/dishes", async (req, res) => {
  const fileContent = await fs.readFile("./data/dishes.json");
  const dishes = JSON.parse(fileContent);

  const newDish = req.body;
  dishes.push(newDish);

  await fs.writeFile("./data/dishes.json", JSON.stringify(dishes, null, 2));
  res.status(200).json({ message: "Dishes added!" });
});

//Dá upload às imagens dos dishes
//Guarda a imagem e retorna o nome do ficheiro e do caminho
app.post("/dishes-images", upload.single("dish-image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Image upload failed." });
  }
  res.json({
    filename: req.file.filename,
    path: req.file.path,
  });
});

//Apaga um prato
//Remove um prato do dishes.json com base no nome (dishName)
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

//ORDERS

//Busca todos os pedidos
//Lê os pedidos e os utilizadores, associa os pedidos aos utilizadores, e retorna o pedidos com os nomes dos utilizadores
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

//Adiciona um novo pedido
//Cria um novo pedido com o email, os pratos e um estado, por defeito "pending"
//Associa um id ao pedido. O cálculo vai buscar os ids usados até então, encontra o maior id e cria um novo id para o novo pedido adicionando 1 ao último id
app.post("/orders", async (req, res) => {
  const fileContent = await fs.readFile("./data/user-dishes.json");
  const orders = JSON.parse(fileContent);

  // construir pedido
  const newOrder = { email: req.body.email, dishes: req.body.dishes, status: "pending" };

  // calcular id
  const existingIds = Object.keys(orders).map((id) => parseInt(id));
  const maxId = existingIds.length > 0 ? Math.max(...existingIds) : 0;
  const newId = maxId + 1;

  // dar update pedido
  orders[newId] = newOrder;

  // guardar
  await fs.writeFile("./data/user-dishes.json", JSON.stringify(orders, null, 2));
  res.status(200).json({ message: "Order added!" });
});

//Avança o estado do pedido
//Pending -> Cooking -> Delivered. Se o estado for "delivered", o pedido é apagado
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

app.listen(3000);
console.log("server listening on 3000");
