let dado = document.getElementById("dado")
let imagen = document.createElement("img")

function faceRandom(){
    return Math.ceil(Math.random() * 6)
}

function tirarDado(){
    imagen.src = "img/dice-" + faceRandom() + ".png"
    dado.appendChild(imagen)
}