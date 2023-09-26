function vocableContables(cadena) {
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

    
    console.log(`Número de vocales: ${numVocales}`);
    console.log(`Número de consonantes: ${numConsonantes}`);

   
}
vocableContables("EL MURCIELAGO DE MI CASA, TIENE BATI SEÑAL");