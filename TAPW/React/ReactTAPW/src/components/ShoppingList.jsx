import listaDeCompras from "../data/listaDeCompras";

export default function ShoppingList({ item, quantidade }) {
  return (
    <>
      <h4>Lista de Compras</h4>
      {listaDeCompras.map((item) => (
        <li>
          <b>{item.item}</b> - {item.quantidade}
        </li>
      ))}
    </>
  );
}
