function esPalindromo(cadena) {
    const cadenaLimpia = cadena.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
    return cadenaLimpia === cadenaLimpia.split("").reverse().join("");
}

function verificarPalindromo() {
    const cadena = document.getElementById("cadena").value;
    const esPalindromoResultado = esPalindromo(cadena);

    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = esPalindromoResultado
        ? "Es un palíndromo"
        : "No es un palíndromo";
}
