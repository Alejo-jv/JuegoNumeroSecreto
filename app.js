let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function verificarIntento() {
    //console.log ('Click desde el botón');
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if(numeroUsuario == numeroSecreto){
        asignarElementoTexto ('p', `Acertaste el número en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó
        if (numeroUsuario > numeroSecreto){
        asignarElementoTexto ('p', 'El número secreto es menor');
        } else {
        asignarElementoTexto ('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function asignarElementoTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
asignarElementoTexto('h1', 'Juego del número secreto');
asignarElementoTexto('p','Selecciona un número');

function generarNumeroSecreto () {
    //si numero generado esta en lista escojo otro si no sigo.
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   console.log (numeroGenerado);
   console.log (listaNumerosSorteados);
    //si ya sorteamos todos los numeros salir
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarElementoTexto('p', 'Ya se sortearon todos los números posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push (numeroGenerado);
            return numeroGenerado;
        }
    }
}
function limpiarCaja(){
  document.getElementById('valorUsuario').value =''
}

function reiniciarJuego(){
    //Primero limpiar la caja
    limpiarCaja();
    //Indicar mensaje
    condicionesIniciales();
    //desabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
   
}

function condicionesIniciales(){
    asignarElementoTexto('h1', 'Juego del número secreto');
    asignarElementoTexto('p',`Selecciona un número del 1 al ${numeroMaximo}` );
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
}
condicionesIniciales();