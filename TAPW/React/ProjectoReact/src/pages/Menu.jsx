import { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";

export default function Menu() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/dishes")
      .then((res) => res.json())
      .then((data) => setDishes(data.dishes));
  }, []);

  const renderCategory = (categoryName) => {
    const categoryDishes = dishes.filter((dish) => dish.dishCategory === categoryName);
    if (categoryDishes.length === 0) {
      return <p>No dishes available</p>;
    }
    return (
      <div className="cards-section">
        {categoryDishes.map((dish) => (
          <FoodCard name={dish.dishName} imageName={dish.dishImage} description={dish.dishDescription} category={dish.dishCategory} price={dish.dishPrice} key={dish.dishName} />
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="main-content">
        <h2>Check out our menu!</h2>
        <h3>Appetizers</h3>
        <div className="cards-section">{renderCategory("appetizers")}</div>
        <h3>Mains</h3>
        <div className="cards-section">{renderCategory("mains")}</div>
        <h3>Dessert</h3>
        <div className="cards-section">{renderCategory("dessert")}</div>
      </div>
    </>
  );
}
