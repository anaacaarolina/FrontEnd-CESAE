import FoodCard from "../components/FoodCard";

export default function Menu() {
  return (
    <>
      <div className="main-content">
        <h2>Check out our menu!</h2>
        <h3>Appetizers</h3>
        <div className="cards-section">
          <FoodCard></FoodCard>
          <FoodCard></FoodCard>
          <FoodCard></FoodCard>
          <FoodCard></FoodCard>
        </div>
        <h3>Mains</h3>
        <div className="cards-section">
          <FoodCard></FoodCard>
          <FoodCard></FoodCard>
          <FoodCard></FoodCard>
          <FoodCard></FoodCard>
        </div>
        <h3>Dessert</h3>
        <div className="cards-section">
          <FoodCard></FoodCard>
          <FoodCard></FoodCard>
          <FoodCard></FoodCard>
          <FoodCard></FoodCard>
        </div>
      </div>
    </>
  );
}
