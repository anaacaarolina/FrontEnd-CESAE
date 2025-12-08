import { useEffect, useState } from "react";
import FoodCardOrder from "../components/FoodCardOrder";

export default function Order() {
  const [dishes, setDishes] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/dishes")
      .then((res) => res.json())
      .then((data) => setDishes(data.dishes));
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  function handlePlaceOrder() {
    const SELECTED_CLASS_NAME = "card-selected";

    const selectedCards = Array.from(document.querySelectorAll("." + SELECTED_CLASS_NAME));
    const selectedDishes = selectedCards.map((card) => card.dataset.key);

    if (!selectedDishes || selectedDishes.length === 0) return;

    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email, dishes: selectedDishes }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Order updated:", data));

    for (let card of selectedCards) {
      card.classList.remove(SELECTED_CLASS_NAME);
    }
  }

  return (
    <>
      <div className="main-content">
        <h2>Place your order</h2>
        <div className="cards-section">{dishes.length === 0 ? <p>No dishes available</p> : dishes.map((dish) => <FoodCardOrder name={dish.dishName} description={dish.dishDescription} category={null} price={dish.dishPrice} imageName={null} key={dish.dishName} />)}</div>
        <button onClick={handlePlaceOrder}>Place Order</button>
      </div>
    </>
  );
}
