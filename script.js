let intentos = 6;
let palabras = ["ANGLE", "QUEEN", "MICRO", "GLASS", "WATER"];
let random = Math.floor(Math.random() * palabras.length);
let palabra = palabras[random];
const INPUT = document.getElementById("guess-input");
const BUTTON = document.getElementById("guess-button");
const GRID = document.getElementById("grid");

window.addEventListener('load', init);

function init(){
    console.log('Esto se ejecuta solo cuando se carga la página web')
}

BUTTON.addEventListener('click', intentar);

function intentar(){
    const ROW = document.createElement('div');
    const GRID = document.getElementById("grid");
    ROW.className = 'row';
    const INTENTO = leerIntento();

    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        ROW.appendChild(SPAN)
        GRID.appendChild(ROW)
        SPAN.innerHTML = INTENTO[i];

        if(INTENTO[i] === palabra[i]){
            SPAN.style.backgroundColor = '#79b851';
        } else if( palabra.includes(INTENTO[i]) ) {
            SPAN.style.backgroundColor = '#f3c237';
        } else {
            SPAN.style.backgroundColor = '#a4aec4';
        }
        ROW.appendChild(SPAN)
    }
    if (INTENTO === palabra ) {
        terminar("<h1>GANASTE!😀</h1>");
        return;
    }
    GRID.appendChild(ROW)
    intentos--;
    if (intentos === 0){
        terminar("<h1>PERDISTE!😖</h1>");
    }
}

function leerIntento(){
    let intento = document.getElementById('guess-input');
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}

function terminar(mensaje){
    INPUT.disabled = true;
    BUTTON.disabled = true;
    let result = document.getElementById('result');
    result.innerHTML = mensaje;
}