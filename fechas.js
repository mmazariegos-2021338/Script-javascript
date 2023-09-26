function diferenciaDias(fecha1, fecha2) {
    const unDia = 24 * 60 * 60 * 1000;
    const diferenciaDias = Math.abs(Math.round((fecha1 - fecha2) / unDia));
    return diferenciaDias;
}


let fechaInicio = new Date(2023, 9, 26); //Fecha del dia de hoy 
let fechaFin = new Date(2023, 12, 25); // La Navidad.
let diferencia = diferenciaDias(fechaInicio, fechaFin);


console.log(diferencia);
console.log("Ya esta cerca la Navidad SIUUUUUUU") 
