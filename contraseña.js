function validarContrasenaNueva(contrasena) {
    let Mayuscula = /[A-Z]/.test(contrasena);
    let Minuscula = /[a-z]/.test(contrasena);
    let Numero = /\d/.test(contrasena);
    let Longitud = contrasena.length >= 8;

    return Mayuscula && Minuscula && Numero && Longitud;
}


let esValida = validarContrasenaNueva("MiP@ssw0rd123");
console.log(esValida); 
console.log("Tu contraseña es Valida.")
