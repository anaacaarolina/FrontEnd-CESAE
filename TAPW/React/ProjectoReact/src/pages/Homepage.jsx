import { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";

export default function Homepage() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/dishes")
      .then((res) => res.json())
      .then((data) => setDishes(data.dishes));
  }, []);

  const renderDish = (nameOne, nameTwo, nameThree, nameFour) => {
    const categoryDishes = dishes.filter((dish) => dish.dishName === nameOne || dish.dishName === nameTwo || dish.dishName === nameThree || dish.dishName === nameFour);
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
      <div className="hero-section">
        <h2>Delicious Moments a Click Away</h2>
        <p>Your favorite flavors, prepared with care and delivered with speed.</p>
      </div>
      <div className="main-content">
        <div className="featured-items">
          <div className="famous-dishes">
            <h3>Our most-loved choices</h3>
            <div className="cards-section">{renderDish("Amalfi Lemon Scallops", "Saffron Risotto Royale", "Wild Boar Pappardelle", "Espresso Silk Tiramisu")}</div>
          </div>
          <div className="new-dishes">
            <h3>Explore the newest flavors in the menu</h3>
            <div className="cards-section">{renderDish("Prosciutto Rosé Melon", "Lobster Tagliolini Luxe", "Porcini Velvet Gnocchi", "Vanilla Olive Oil Gelato")}</div>
          </div>
        </div>
      </div>
    </>
  );
}
