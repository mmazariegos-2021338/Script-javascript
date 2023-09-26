function contarDigitosNueva(numero) {
    let contador = 0;
    while (numero !== 0) {
        numero = Math.floor(numero / 10);
        contador++;
    }
    return contador;
}


let cantidadDigitos = contarDigitosNueva(789613546798798465465498798654651621654659879546516465987);
console.log(cantidadDigitos);


