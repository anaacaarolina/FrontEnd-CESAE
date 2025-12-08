import { useEffect, useState } from "react";

export default function Manager() {
  const [dishes, setDishes] = useState([]);
  const [users, setUsers] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/dishes")
      .then((res) => res.json())
      .then((data) => setDishes(data.dishes));
  }, [refreshKey]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, [refreshKey]);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const dishImage = new FormData();
    dishImage.append("dish-image", data["dish-name"]);
    dishImage.append("dish-image", formData.get("dish-image"));

    const imageUpload = await fetch("http://localhost:3000/dishes-images", {
      method: "POST",
      body: dishImage,
    });

    const imageData = await imageUpload.json();
    // console.log(imageData);

    const dish = {
      dishName: data["dish-name"],
      dishDescription: data["dish-description"],
      dishCategory: data["dish-category"],
      dishPrice: data["dish-price"],
      dishImage: imageData.filename,
    };
    // console.log(dish);
    fetch("http://localhost:3000/dishes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dish),
    });
    setRefreshKey(refreshKey + 1);

    event.target.reset();
  }

  function handleDelete(dish) {
    const dishName = dish.dishName;
    fetch("http://localhost:3000/dishes/delete", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dishName }),
    });
    setRefreshKey(refreshKey + 1);
  }

  // Vai buscar o role tirando o value do roleSelectElement.
  function handleRoleChange(email, roleSelectElement) {
    const role = roleSelectElement.value;
    fetch("http://localhost:3000/users/edit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, role }),
    });
    setRefreshKey(refreshKey + 1);
  }

  const dishesTable = dishes.map((dish) => (
    <tr key={dish.dishName}>
      <td>{dish.dishName}</td>
      <td>{dish.dishDescription}</td>
      <td>{dish.dishCategory}</td>
      <td>{dish.dishPrice}</td>
      <td>
        <button onClick={() => handleDelete(dish)}>Delete</button>
      </td>
    </tr>
  ));

  const usersTable = users.map((user) => {
    return (
      <tr key={user.email}>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>
          <select defaultValue={user.role} id={user.email}>
            <option value="customer">Customer</option>
            <option value="manager">Manager</option>
            <option value="kitchen">Kitchen</option>
          </select>
        </td>
        <td>
          {/* O hanle role change recebe o email e o elemento select do respetivo user */}
          <button onClick={() => handleRoleChange(user.email, document.getElementById(user.email))}>Confirm</button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div>
        <h2>Add dishes</h2>
        <form onSubmit={handleSubmit} action="/backend">
          <label htmlFor="dish-name">Name</label>
          <input id="dish-name" type="text" name="dish-name" required />
          <label htmlFor="dish-description">Description</label>
          <input id="dish-description" type="text" name="dish-description" />
          <label htmlFor="dish-image">Image</label>
          <input type="file" id="dish-image" name="dish-image" accept=".png, .jpeg,.jpg,.webp" /> <label htmlFor="dish-category">Category</label>
          <select id="dish-category" name="dish-category">
            <option value="appetizers">Appetizers</option>
            <option value="mains">Mains</option>
            <option value="dessert">Dessert</option>
          </select>
          <label htmlFor="dish-price">Price</label>
          <input id="dish-price" name="dish-price" type="number" />
          <button type="submit" className="button">
            Add Dish
          </button>
        </form>
      </div>
      <div>
        <h2>Dishes</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{dishesTable}</tbody>
        </table>
      </div>
      <div>
        <h2>Users</h2>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Change Role</th>
            </tr>
          </thead>
          <tbody>{usersTable}</tbody>
        </table>
      </div>
    </>
  );
}
