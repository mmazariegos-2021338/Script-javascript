function mensaje1() {
    console.log("La programacion es Chida");
}

function mensaje2() {
    console.log("Puedes creer que solo falta un mes para terminar practicas.");
}

function mensaje3() {
    console.log("La musica te hace protagonista.");
}

function mensaje4() {
    console.log("JavaScript mi patrona.");
}

function mensaje5() {
    console.log("Frases Random");
}

let array = [mensaje1, mensaje2, mensaje3, mensaje4, mensaje5];

function ejecutarFuncionAleatoriaNueva() {
    let indiceAleatorio = Math.floor(Math.random() * array.length);
    array[indiceAleatorio]();
}

ejecutarFuncionAleatoriaNueva();