export default function FoodCard({ name, imageName, description, category, price }) {
  return (
    <>
      <div className="food-card">
        {imageName && <img src={`http://localhost:3000/images/${imageName}`} className="dish-image" />}
        <h4 className="dish-name">{name}</h4>
        <p className="dish-description">{description}</p>
        <p className="dish-category">{category}</p>
        <p className="dish-price">{price}&#8364;</p>
      </div>
    </>
  );
}
