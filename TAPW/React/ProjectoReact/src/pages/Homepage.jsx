import FoodCard from "../components/FoodCard";

export default function Homepage() {
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
            <div className="cards-section">
              <FoodCard></FoodCard>
              <FoodCard></FoodCard>
              <FoodCard></FoodCard>
              <FoodCard></FoodCard>
            </div>
          </div>
          <div className="new-dishes">
            <h3>Explore the newest flavors in the menu</h3>
            <div className="cards-section">
              <FoodCard></FoodCard>
              <FoodCard></FoodCard>
              <FoodCard></FoodCard>
              <FoodCard></FoodCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
