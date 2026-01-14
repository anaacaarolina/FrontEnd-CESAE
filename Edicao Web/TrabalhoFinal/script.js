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
//objeto com info dos cursos
const infoCursos = {
  "Software Developer": {
    titulo: "Software Developer",
    descricao: "Sabias que um software developer pode trabalhar em/e para qualquer parte do mundo? Sabias que a profissão de software developer é uma das profissões com maior taxa de empregabilidade e salários competitivos?",
    preco: "950€",
    duracao: "6 meses",
  },
  "Web Developer": {
    titulo: "Web Developer",
    descricao: "O Curso Web Development ensina o aluno programação e desenvolvimento de websites e aplicações web, com uma metolodgia learn by doing em projetos concretos e apoiados nas mais recentes tecnologias.",
    preco: "350€",
    duracao: "2 meses",
  },
  "Front-End Developer": {
    titulo: "Front-End Developer",
    descricao: "O curso de Full Stack Web Development é ideal para quem pretende iniciar uma carreira na área da Programação Web ou reforçar os seus conhecimentos com uma abordagem prática e orientada para o mercado de trabalho.",
    preco: "500€",
    duracao: "4 meses",
  },
  "Girls Can Code!": {
    titulo: "Girls Can Code!",
    descricao: "Com o objetivo de promover diversidade e inclusão no setor, o projeto visa capacitar jovens raparigas a explorar todo o potencial do mundo digital, proporcionando-lhes oportunidades de aprendizagem e desenvolvimento de competências digitais.",
    preco: "200€",
    duracao: "6 semanas",
  },
};

//modal
const modalCurso = document.createElement("dialog");
modalCurso.style.border = "none";
modalCurso.style.width = "90%";
modalCurso.style.maxWidth = "500px";
modalCurso.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";

modalCurso.innerHTML = `<div class="modalHeader">
  <h3 id="modalTitulo"></h3>
  <button id="modalFecharHeader" class="btn btn-secondary">&times;</button>
</div>
<div class="modalBody">
  <p id="modalDescricao"></p>
  <hr>
  <p id="modalPreco"></p>
  <p id="modalDuracao"></p>
</div>
<div class="modalFooter">
  <button id="modalFecharFooter" class="btn btn-secondary">Fechar</button>
</div>`;
document.body.appendChild(modalCurso);

const modalHeader = document.querySelector(".modalHeader");
modalHeader.style.padding = "5px";
modalHeader.style.display = "flex";
modalHeader.style.justifyContent = "space-between";
modalHeader.style.alignItems = "center";
const modalFecharHeader = document.querySelector("#modalFecharHeader");
modalFecharHeader.style.border = "none";
modalFecharHeader.style.width = "80px";
modalFecharHeader.style.height = "45px";
modalFecharHeader.style.fontSize = "24px";
modalFecharHeader.style.cursor = "pointer";
const modalBody = document.querySelector(".modalBody");
modalBody.style.padding = "20px";
const modalDescricao = document.querySelector("#modalDescricao");
modalDescricao.style.color = "#444";
const modalFooter = document.querySelector(".modalFooter");
modalFooter.style.background = "#f8f9fa";
modalFooter.style.textAlign = "center";

//abrir o modal quando se carrega no botao
document.querySelectorAll("#cursos .card").forEach((card) => {
  const cardTitulo = card.querySelector(".card-title");
  const cardBotao = card.querySelector(".btn");

  cardBotao.addEventListener("click", (event) => {
    event.preventDefault();

    const nomeDoCurso = cardTitulo.innerText.trim();
    const dados = infoCursos[nomeDoCurso];
    if (dados) {
      document.getElementById("modalTitulo").innerHTML = dados.titulo;
      document.getElementById("modalDescricao").innerHTML = dados.descricao;
      document.getElementById("modalPreco").innerHTML = `<b>Preço:</b> ${dados.preco}`;
      document.getElementById("modalDuracao").innerHTML = `<b>Duração:</b> ${dados.duracao}`;
      modalCurso.showModal();
    } else {
      console.log("Curso não encontrado: " + nomeDoCurso);
    }
  });
});
const fecharModal = () => modalCurso.close();

document.getElementById("modalFecharHeader").onclick = fecharModal;
document.getElementById("modalFecharFooter").onclick = fecharModal;
// Criar quiz e validação do quiz

// Implementar um carrossel no sobre nós

// Integrar uma api externa
//Leaflet -> https://leafletjs.com/examples/quick-start/
const footer = document.querySelector("footer");
const seccaoMapa = document.createElement("section");
seccaoMapa.id = "seccaoMapa";
seccaoMapa.style.textAlign = "center";
seccaoMapa.style.marginBottom = "25px";
footer.parentNode.insertBefore(seccaoMapa, footer);

const tituloSeccaoMapa = document.createElement("h2");
tituloSeccaoMapa.textContent = "Onde Estamos";
seccaoMapa.appendChild(tituloSeccaoMapa);

//Adicionar os links do Leaflet no HTML
const cssLeaflet = document.createElement("link");
cssLeaflet.rel = "stylesheet";
cssLeaflet.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
document.head.appendChild(cssLeaflet);

const jsLeaflet = document.createElement("script");
jsLeaflet.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
document.body.appendChild(jsLeaflet);

//Inserir o mapa na página
const mapDiv = document.createElement("div");
mapDiv.id = "mapaDiv";
mapDiv.style.height = "300px";
seccaoMapa.appendChild(mapDiv);

const locais = [
  { nome: "Porto", latitude: 41.1585, longitude: -8.6503 },
  { nome: "São João da Madeira", latitude: 40.8853, longitude: -8.4858 },
  { nome: "Lisboa", latitude: 38.7636, longitude: -9.0938 },
];

jsLeaflet.onload = () => {
  //[Coordernadas, zoom level]
  const mapa = L.map("mapaDiv").setView([40.8853, -8.4858], 16);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(mapa);

  let marker;

  function setLocalMapa(latitude, longitude, legenda) {
    mapa.setView([latitude, longitude], 16);
    if (marker) {
      marker.setLatLng([latitude, longitude]).setPopupContent(legenda).openPopup();
    } else {
      marker = L.marker([latitude, longitude]).addTo(mapa).bindPopup(legenda).openPopup();
    }
  }

  locais.forEach((local) => {
    const botaoLocal = document.createElement("button");
    botaoLocal.textContent = local.nome;
    botaoLocal.style.marginRight = "10px";
    botaoLocal.style.padding = "5px 10px";
    seccaoMapa.appendChild(botaoLocal);

    botaoLocal.onclick = () => {
      setLocalMapa(local.latitude, local.longitude, local.nome);
    };
  });
};
