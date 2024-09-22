function validar(formulario) {
    
    var numeroDNI = document.getElementById("introDNI").value;
    var letraDNI = document.getElementById("edad").value.toUpperCase();  // Convertir letra a mayúsculas para evitar problemas de comparación

    
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    
    if (numeroDNI < 0 || numeroDNI > 99999999) {
        alert("El número no es válido. Debe estar entre 0 y 99.999.999.");
        return false;
    }

    
    if (letraDNI === "" || letraDNI.length !== 1) {
        alert("Por favor, introduce una sola letra.");
        return false;
    }

    // Validar que la letra ingresada esté en mayúsculas
    if (letraDNI !== letraDNI.toUpperCase()) {
        alert("La letra es preferible que esté en mayúsculas.");
        return false;
    }

    
    var residuo = numeroDNI % 23;  
    var letraCorrecta = letras[residuo];  

   
    if (residuo === 0 && letraDNI !== 'T') {
        alert("La letra proporcionada no es correcta. La letra correcta es: T");
        return false;
    } else if (residuo === 1 && letraDNI !== 'R') {
        alert("La letra proporcionada no es correcta. La letra correcta es: R");
        return false;
    }

    
    if (letraDNI !== letraCorrecta) {
        alert("La letra proporcionada no es correcta. La letra correcta es: " + letraCorrecta);
        return false;
    }

    alert("El número y la letra del DNI son correctos.");
    return true;
}