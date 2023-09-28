function diferenciaDias() {
    const fechaInicio = new Date(document.getElementById("fechaInicio").value);
    const fechaFin = new Date(document.getElementById("fechaFin").value);

    const unDia = 24 * 60 * 60 * 1000;
    const diferenciaDias = Math.abs(Math.round((fechaInicio - fechaFin) / unDia));

    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `La diferencia entre las fechas es de ${diferenciaDias} días.`;
}

