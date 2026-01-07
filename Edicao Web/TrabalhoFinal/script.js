// Validação do formulário de contato
document.getElementById("formulario-contato").addEventListener("submit", function (event) {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let contacto = document.getElementById("contatoFormulario").value;
  let escola = document.getElementById("regiao").value;
  let mensagem = document.getElementById("mensagem").value;

  if (nome === "") {
    alert("Por favor, preencha o nome.");
  }
  if (email === "") {
    alert("Por favor, preencha o email.");
  }
  if (contacto === "") {
    alert("Por favor, preencha o contacto.");
  }
  if (escola === "") {
    alert("Por favor, escolha uma escola.");
  }
  if (mensagem === "") {
    alert("Por favor, preencha a mensagem.");
  } else {
    alert("Formulário enviado com sucesso!");
  }
});

// Animação dos cards dos cursos - REMOVIDO (animação feita no CSS)
// const cards = document.querySelectorAll("#cursos .card");

// cards.forEach((card) => {
//   card.addEventListener("mouseover", () => {
//     card.style.transform = "scale(1.1)";
//   });
//   card.addEventListener("mouseout", () => {
//     card.style.transform = "scale(1.0)";
//   });
// });

// Adicionar cursos na lista de cursos
const lista = document.querySelector("#sobre ul");
const novoCurso1 = document.createElement("li");
const novoCurso2 = document.createElement("li");

novoCurso1.innerText = "Comunicação Digital";
novoCurso2.innerText = "Formação de Formadores";

lista.append(novoCurso1, novoCurso2);

// Botão voltar ao topo
const botaoTopo = document.createElement("button");
botaoTopo.className = "btn btn-secondary";

botaoTopo.innerText = "Topo";
botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "5%";
botaoTopo.style.right = "2%";

document.body.appendChild(botaoTopo);

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    botaoTopo.style.display = "block";
  } else {
    botaoTopo.style.display = "none";
  }
});

botaoTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// DESAFIOS EXTRA ESCOLHER 3
// Implementar envio de formulário de contacto sem dar refresh à página com AJAX

// Criar modais para cada curso

// Criar quiz e validação do quiz

// Implementar um carrossel no sobre nós

// Integrar uma api externa
