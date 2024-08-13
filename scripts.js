// Función para encriptar el texto
function encriptar() {
    let texto = document.getElementById("inputText").value;
    let textoEncriptado = btoa(texto); // Encriptar usando Base64
    document.getElementById("outputText").value = textoEncriptado;
}

// Función para desencriptar el texto
function desencriptar() {
    let textoEncriptado = document.getElementById("outputText").value;
    let textoDesencriptado = atob(textoEncriptado); // Desencriptar usando Base64
    document.getElementById("outputText").value = textoDesencriptado;
}

// Función para copiar el texto encriptado
function copiarTexto() {
    let textoEncriptado = document.getElementById("outputText");
    textoEncriptado.select();
    document.execCommand("copy");
    alert("Texto copiado: " + textoEncriptado.value);
}
