let numeroSecreto= 0;
let intentos= 0;
let listaNumerosSorteados= [];
let numeroMaximo= 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento);
elementoHTML.innerHTML= texto;
}

function verificarIntento(){
 let numeroDeUsuario = parseInt (document.getElementById("valorUsuario").value);

 if(numeroDeUsuario === numeroSecreto){
  asignarTextoElemento("p",`Acertaste probando ${intentos} ${(intentos===1)? "vez" : "veces"}`);
  
  document.getElementById("reiniciar").removeAttribute("disabled");
 }else{
    //el usuario no acertó
    if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento("p","El número secreto es menor");
    }else{
        asignarTextoElemento("p","El número secreto es mayor");
    }
    intentos ++;
    limpiarCaja();
 }
}

function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los números");
    }else{
    if (listaNumerosSorteados.includes (numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
 }
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value= " ";
}

function condicionesIniciales(){

  asignarTextoElemento("h1","El Juego del Número Secreto");
  asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto= generarNumeroSecreto();
  intentos= 1;
}

function reiniciarJuego(){
    limpiarCaja();
    
    condicionesIniciales();

    document.querySelector("#reiniciar").setAttribute("disabled", "true");

}

condicionesIniciales();