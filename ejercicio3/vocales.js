function contarVocalesConsonantes() {
    const cadena = document.getElementById("cadena").value;
    let numVocales = 0;
    let numConsonantes = 0;

    for (let i = 0; i < cadena.length; i++) {
        let letra = cadena[i].toLowerCase();
        if (letra.match(/[aeiou]/)) {
            numVocales++;
        } else if (letra.match(/[bcdfghjklmnpqrstvwxyz]/)) {
            numConsonantes++;
        }
    }

    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `Número de vocales: ${numVocales} <br> Número de consonantes: ${numConsonantes}`;
}

