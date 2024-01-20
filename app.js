/* La manera de conectar los elementos de html con nuestro js es con el document, que me permite trabajar con muchos
metodos.*/
//queryselector --> traes el objeto h1
//innerHTML --> le pongo texto

let numeroSecreto = 0;
let intentos = 0;
let listaNumSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value);

    // el ===  dice que tienen que tener el mismo valor y el mismo tipo de dato
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número es menor');
        } else {
            asignarTextoElemento('p', 'El número es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    // si le pongo al principio # queryselector sabe que estoy buscando una id
    document.querySelector('#valorDeUsuario').value = "";
}

function numeroRandomico() {
    // Math.random()*10 --> solo se toma hasta el 10
    // Math.floor() --> para que retorne solo la parte decimal
    // Math.floor(Math.random*10)+1 para ir del 1 al 10
    /*
    En la recursividad hay que tener una condicion de salida porque en este caso
    llega un punto donde estan todos los numeros dentro de la lista y el metodo
    trata de poner mas numeros cuando no existen mas, generando un error.
    */
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumSorteados);

    if (listaNumSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números.');
    } else {
        if (listaNumSorteados.includes(numeroGenerado)) {
            return numeroRandomico();
        } else {
            listaNumSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Dadme un número del 1 al ${numeroMaximo}`);
    numeroSecreto = numeroRandomico();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();

    //generar numero aleatorio
    //inicializar el numero de intentos
    //Indicar mensaje de intervalo d nuemero
    condicionesIniciales();

    //deshaiblitar el boton
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();

/*
let numeroSorteados = [];
numeroSorteados.push(5);
numeroSorteados.push(7);
frutas.pop(7);
console.log(numeroSorteados.length);
console.log(numeroSorteados[0]);
console.log(numeroSorteados[numeroSorteados.length-1]);
*/