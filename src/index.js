import cipher from "./cipher.js";

// Función activación de mayúsculas automáticas
function start() {
  document.getElementById("userInput").addEventListener("keyup", function () {
    this.value = this.value.toUpperCase();
  });
}

start();

// Eventos de llamado para boton cifrar
document.getElementById("code").addEventListener("click", function () {
  const message = document.getElementById("userInput").value;
  const offset = parseInt(document.getElementById("rangeSelector").value);
  document.getElementById("userOutput").value = cipher.encode(offset, message);
});

// Eventos de llamado para boton descifrar
document.getElementById("decode").addEventListener("click", function () {
  const message = document.getElementById("userInput").value;
  const offset = parseInt(document.getElementById("rangeSelector").value);
  document.getElementById("userOutput").value = cipher.decode(offset, message);
});


