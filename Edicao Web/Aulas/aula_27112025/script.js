const form = document.querySelector("form");
const inputItem = document.querySelector("#item");
const inputQuantidade = document.querySelector("#quantidade");
const list = document.querySelector("#grocery-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const itemLista = inputItem.value;
  const quantidadeLista = inputQuantidade.value;
  const newLi = document.createElement("li");
  newLi.innerText = itemLista + ": " + quantidadeLista;
  list.append(newLi);
});
