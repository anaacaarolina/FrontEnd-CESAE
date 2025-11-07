//====ID EXERCISES====//
// let image = document.getElementById("imagem_doc");
// let heading = document.getElementById("titulo");

// console.log(image);
// console.log(heading);

//====TODOS====//
// let doneTodos = document.querySelectorAll(".done");
// let checkboxes = document.querySelectorAll('input[type="checkbox"]');

// console.log(doneTodos);
// console.log(checkboxes);

//====PICKLES====//
// let titlePickles = document.querySelector("h1").innerText;
// console.log(titlePickles);
// document.querySelector("h1").innerText = "Yack";
// titlePickles = document.querySelector("h1").innerText;
// console.log(titlePickles);

//====CHICKEN====//
// let chickenImage = document.querySelector("img");
// console.log(chickenImage);
// function mudarImagem() {
//   if (chickenImage.getAttribute("src") === "https://media.istockphoto.com/id/1313823703/pt/foto/one-brown-chicken-egg-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=xwuuodcja84SvjrasjFDoor5Wo_3qT6OZ5VmtDs2RbQ=") {
//     chickenImage.setAttribute("src", "https://devsprouthosting.com/images/chicken.jpg");
//   } else {
//     chickenImage.setAttribute("src", "https://media.istockphoto.com/id/1313823703/pt/foto/one-brown-chicken-egg-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=xwuuodcja84SvjrasjFDoor5Wo_3qT6OZ5VmtDs2RbQ=");
//   }
// }

//====MAGICAL FOREST====//
// let centeredContainer = document.getElementById("container");
// centeredContainer.style.textAlign = "center";
// let changedImage = document.getElementById("floresta");
// changedImage.style.width = "150px";
// changedImage.style.borderRadius = "50%";

//====RAINBOW====//
let divsTodos = document.querySelectorAll("div");
let cores = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

divsTodos.forEach((item, index) => {
  item.style.backgroundColor = cores[index];
});
