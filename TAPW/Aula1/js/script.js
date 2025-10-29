function hello() {
  alert("cucu");
}
let myName = null;

// if (myName) {
//   myName = myName;
// } else {
//   myName = "user";
// }

// TERNARIO
myName = myName ? myName : "user";

function helloUser() {
  alert("Olá, " + myName + "!");
}
