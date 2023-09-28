function contarDigitos() {
    const entrada = document.getElementById("numero").value;
    const numero = parseInt(entrada);

    if (!isNaN(numero)) {
        let contador = 0;
        let tempNumero = Math.abs(numero);

        do {
            tempNumero = Math.floor(tempNumero / 10);
            contador++;
        } while (tempNumero > 0);

        document.getElementById("resultado").textContent = `El número tiene ${contador} dígitos.`;
    } else {
        document.getElementById("resultado").textContent = "Por favor, ingresa un número válido.";
    }
}
