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
  const palabra = cipher.encode(offset, message);
  const msgEncode = document.getElementById("userOutput");

  msgEncode.value = palabra;
});

document.getElementById("decode").addEventListener("click", function () {
  const message = document.getElementById("userInput").value;
  const offset = document.getElementById("rangeSelector").value;
  const palabra = cipher.decode(offset, message);
  const msgEncode = document.getElementById("userOutput");

  msgEncode.value = palabra;
});

// codeMessage.addEventListener("click", function () {
//   let string = document.getElementById("userInput").value;
//   let offset = document.getElementById("rangeSelector").value;
//   let userWord = document.getElementById("userOutput");

//   userWord.textContent = cipher.encode(offset, string);
// });
