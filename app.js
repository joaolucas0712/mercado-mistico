
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})


let menu = document.querySelector("#div1")
let botaomenu = document.querySelector(".menu")
let fechar2 = document.querySelector("#fechar-modal")

botaomenu.addEventListener("click", (e) =>{
    menu.style.display = "flex"
  })
  fechar2.addEventListener("click", (e) =>{
    menu.style.display = "none"
  })