const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const changeRed = document.getElementById('changeRed')
const changeGreen = document.getElementById('changeGreen')
const changeBlue = document.getElementById('changeBlue')
const changeYellow = document.getElementById('changeYellow')
const changeOrange = document.getElementById('changeOrange')
const lamp = document.getElementById('lamp')

function lampOm (){
    lamp.src = "./img/ligada.jpg";

}

function lampOff(){
lamp.src = "./img/desligada.jpg";

}

function lampBlue(){
    lamp.src = "./img/azul.jpg";

}
function lampYellow(){
    lamp.src = "./img/amarelo.jpg";
    
}

function lampGreen(){
    lamp.src = "./img/verde.jpg";

}

function lampOrange(){
    lamp.src = "./img/laranja.jpg";

}

function lampRed(){
    lamp.src = "./img/vermelho.jpg";
}



turnOn.addEventListener('click', lampOm);
turnOff.addEventListener('click', lampOff);
changeBlue.addEventListener('click', lampBlue);
changeGreen.addEventListener('click', lampGreen);
changeYellow.addEventListener('click', lampYellow);
changeRed.addEventListener('click', lampRed);
changeOrange.addEventListener('click', lampOrange);