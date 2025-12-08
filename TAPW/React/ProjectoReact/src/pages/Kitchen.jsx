import { useEffect, useState } from "react";
export default function Kitchen() {
  const [orders, setOrders] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/orders")
      .then((res) => res.json())
      .then((data) => {
        const ordersObject = data.orders;
        //{id: {name, dishes, status}, ...}
        const ordersArray = Object.keys(ordersObject).map((id) => ({
          id: id,
          name: ordersObject[id].name,
          dishes: ordersObject[id].dishes,
          status: ordersObject[id].status,
        }));
        setOrders(ordersArray);
      });
  }, [refreshKey]);

  function handleAdvance(order) {
    fetch("http://localhost:3000/orders/advance", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: order.id }),
    }).then(() => setRefreshKey(refreshKey + 1));
  }

  function formatDishList(array) {
    return array.join(", ");
  }

  const pendingTable = orders
    .filter((order) => order.status === "pending")
    .map((order) => (
      <tr key={order.id}>
        <td>{order.id}</td>
        <td>{order.name}</td>
        <td>{formatDishList(order.dishes)}</td>
        <th>
          <button onClick={() => handleAdvance(order)}>Advance</button>
        </th>
      </tr>
    ));
  const cookingTable = orders
    .filter((order) => order.status === "cooking")
    .map((order) => (
      <tr key={order.id}>
        <td>{order.id}</td>
        <td>{order.name}</td>
        <td>{formatDishList(order.dishes)}</td>
        <th>
          <button onClick={() => handleAdvance(order)}>Advance</button>
        </th>
      </tr>
    ));
  const deliveredTable = orders
    .filter((order) => order.status === "delivered")
    .map((order) => (
      <tr key={order.id}>
        <td>{order.id}</td>
        <td>{order.name}</td>
        <td>{formatDishList(order.dishes)}</td>
        <th>
          <button onClick={() => handleAdvance(order)}>Delete</button>
        </th>
      </tr>
    ));

  return (
    <div>
      {Object.keys(orders).length === 0 ? (
        <div>
          <p>No orders</p>
        </div>
      ) : (
        <div className="main-content">
          {orders.some((order) => order.status === "pending") && (
            <>
              <h2>Pending</h2>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Customer</th>
                    <th>Dishes</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{pendingTable}</tbody>
              </table>
            </>
          )}
          {orders.some((order) => order.status === "cooking") && (
            <>
              <h2>Cooking</h2>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Customer</th>
                    <th>Dishes</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{cookingTable}</tbody>
              </table>
            </>
          )}
          {orders.some((order) => order.status === "delivered") && (
            <>
              <h2>Delivered</h2>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Customer</th>
                    <th>Dishes</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{deliveredTable}</tbody>
              </table>
            </>
          )}
        </div>
      )}
    </div>
  );
}
