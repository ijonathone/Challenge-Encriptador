//Conversión a minúsculas
document.getElementById('area-origin').addEventListener('input', function () {
    // Convierte el valor del textarea a minúsculas
    this.value = this.value.toLowerCase();
});

// Encriptar función
function encrypt() {
    const text = document.getElementById('area-origin').value;
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById('area-final').value = encryptedText; // Mostrar texto encriptado en la sección derecha
}

// Desencriptar función
function decrypt() {
    const text = document.getElementById('area-origin').value;
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById('area-final').value = decryptedText; // Mostrar texto desencriptado en la sección derecha
}

// Copiar texto al portapapeles
function copyText() {
    const textArea = document.getElementById('area-final');
    textArea.select();
    document.execCommand('copy');
}

// Limpiar áreas de texto
function clearText() {
    document.getElementById('area-origin').value = '';
    document.getElementById('area-final').value = '';
}
