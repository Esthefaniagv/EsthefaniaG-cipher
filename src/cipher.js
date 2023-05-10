const cipher = {
  encode: function (offset, message) {
    // if (typeof offset !== 'number' || typeof message !== 'string') {
    //   throw new TypeError("Wrong argument types");}
    let resultado = "";
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //para calcular posicion de la letra dentro del abecedario con numero hasta el 25 o menor (negativo)
    const clave = ((offset % 26) + 26) % 26;

    if (message) {
      for (let i = 0; i < message.length; i++) {
        if (alphabet.indexOf(message[i]) !== -1) {
          const position = (alphabet.indexOf(message[i]) + clave) % 26;
          resultado += alphabet[position];
        } else resultado += message[i];
      }
    }
    return resultado;
  },

  decode: function (offset, message) {
    // if (typeof offset !== 'number' || typeof message !== 'string') {
    //   throw new TypeError("Wrong argument types");}
    let resultado = "";
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //para calcular posicion de la letra dentro del abecedario con numero hasta el 25 o menor (negativo)
    const clave = ((offset % 26) - 26) % 26;

    if (message) {
      for (let i = 0; i < message.length; i++) {
        if (alphabet.indexOf(message[i]) !== -1) {
          const position = (alphabet.indexOf(message[i]) - clave) % 26;
          resultado += alphabet[position];
        } else resultado += message[i];
      }
    }
    return resultado;
  },
};

export default cipher;

