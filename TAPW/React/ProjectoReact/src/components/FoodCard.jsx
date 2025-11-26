import square from "../assets/gray-square.png";

<img src={square} />;

export default function FoodCard() {
  return (
    <>
      <div className="food-card">
        <img src={square} className="dish-image" />
        <h4 className="dish-name">Nome do Prato</h4>
        <p className="dish-description">Descrição</p>
        <p className="dish-category">Categoria</p>
        <p className="dish-price">€€€</p>
      </div>
    </>
  );
}
