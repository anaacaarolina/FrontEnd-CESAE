import { useState } from "react";

export default function FoodCardOrder({ name, imageName, description, category, price }) {
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive((prevIsActive) => !prevIsActive);
  }

  const cardClasses = isActive ? "food-card-clickable card-selected" : "food-card-clickable";

  return (
    <>
      <div className={cardClasses} onClick={toggle} data-key={name}>
        {imageName && <img src={`http://localhost:3000/images/${imageName}`} className="dish-image" />}
        <h4 className="dish-name">{name}</h4>
        <p className="dish-description">{description}</p>
        <p className="dish-category">{category}</p>
        <p className="dish-price">{price}&#8364;</p>
      </div>
    </>
  );
}
