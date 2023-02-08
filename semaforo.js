const btnRed = document.querySelector("#red")
const btnYellow = document.querySelector("#yellow")
const btnGreen = document.querySelector("#green")
const semaforoImg = document.querySelector("img")

function semaforoOnRed() {
    semaforoImg.src = './img/vermelho.png'
}

function semaforoOnYellow() {
    semaforoImg.src = './img/amarelo.png'
}

function semaforoOnGreen() {
    semaforoImg.src = './img/verde.png'
}

btnRed.addEventListener("click", semaforoOnRed)
btnYellow.addEventListener("click", semaforoOnYellow)
btnGreen.addEventListener("click", semaforoOnGreen)