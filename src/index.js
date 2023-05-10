import cipher from "./cipher.js";


function start() {
  document.getElementById("userInput").addEventListener("keyup", function () {
    this.value = this.value.toUpperCase();
  });
}

start();

document.getElementById("code").addEventListener("click", function () {
  const message = document.getElementById("userInput").value;
  const offset = document.getElementById("rangeSelector").value;
  document.getElementById("userOutput").value = cipher.encode(offset, message);
});

document.getElementById("decode").addEventListener("click", function () {
  const message = document.getElementById("userInput").value;
  const offset = document.getElementById("rangeSelector").value;
  document.getElementById("userOutput").value = cipher.decode(offset, message);
});


