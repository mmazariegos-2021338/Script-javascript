function esPalindromo(cadena) {
    const cadenaLimpia = cadena.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
    return cadenaLimpia === cadenaLimpia.split("").reverse().join("");
}

const resultado1 = esPalindromo("reconocer");
console.log(`¿Es un palíndromo?: ${resultado1}`); 

const resultado2 = esPalindromo("NO PUES NO");
console.log(`¿Es un palíndromo?: ${resultado2}`); 

