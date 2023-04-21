//Selectam elementele html 
const textCss = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const random1 = document.querySelector("#random1");
const body = document.body

// linear-gradient(to right, rgb(69, 69 , 69) , rgb (96, 96 ,96));
function setGradient(firstColor, secondColor) {
body.style.background= "linear-gradient(to right, " + firstColor + ", " + secondColor + ")";

textCss.textContent = body.style.background + ";";
}

function setGradientOnInput() { 
    setGradient(color1.value, color2.value);
}

function randomnr() {

    return Math.floor(Math.random() * Math.floor(255)) //pt nr random in Console
}

function randomColor() {
    //rgb (x,y,z)
    return "rgb(" + randomnr() + "," + randomnr() + "," + randomnr() + ")";
}

console.log(randomColor())

function setRandomGradient() {
    setGradient(randomColor(), randomColor());
}

random1.addEventListener("click", setRandomGradient)
color1.addEventListener("input", setGradientOnInput)
color2.addEventListener("input", setGradientOnInput)

setGradientOnInput();