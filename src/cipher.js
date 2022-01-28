//Objeto es una coleccion de datos relacionados y funcionalidad, consta de variables y funciones que se denominan propiedades y metodos cuando estan dentro de objetos.
//un objeto puede iniciar con la iniciación de una variable

const cipher = {
  //este es el objeto, el cual se refleja en una variable
  encode: function encode(offset, text) {
    //Nombre:valor
    //se crea el metodo, se refleja en una función
    let textLenght = text.length; //dentro de una variable almaceno eL largo del input "text"
    let finalString = ""; //almacena el resultado del buble for, asignando en cada vuelta la letra con el offset
    const textUppercase = text.toUpperCase(); // transforma el valor del texto a mayusculas antes de que entre al bucle para que el valor Ascci sea en mayusculas :D
    const realOffset = offset % 26;
    console.log(`Text to encode: ${textUppercase}`);
    console.log(`offset: ${offset}. realOffset: ${realOffset}`);

    for (let i = 0; i < textLenght; i++) {
      //el bucle for va a recorrer cada valor iniciando por 0 hasta el largo del text

      if (textUppercase.charCodeAt(i) == 32) {
        finalString += textUppercase[i]; // += va a sumar e igualar finalstring
      } else {
        let value = textUppercase.charCodeAt(i); //guardar el resultado del codigo ascci en una variable
        //FORMULA MICHELLE
        value = ((value - 65 + realOffset) % 26) + 65;
        let transformedChar = String.fromCharCode(value);
        finalString += transformedChar;
      }
    }
    return finalString;
  },

  decode: function decode(offset, text) {
    let textLenght = text.length;
    let finalString = "";
    const textUppercase = text.toUpperCase(); // transforma el valor del texto a mayusculas antes de que entre al bucle para que el valor Ascci sea en mayusculas :D
    const realOffset = offset % 26;
    console.log(`Text to decode: ${textUppercase}`);
    console.log(`offset: ${offset}. realOffset: ${realOffset}`);

    for (let i = 0; i < textLenght; i++) {
      //el bucle for va a recorrer cada valor iniciando por 0 hasta el largo del offset

      if (textUppercase.charCodeAt(i) == 32) {
        finalString += textUppercase[i];
      } else {
        let value = textUppercase.charCodeAt(i); //guardar el resultado del codigo ascci en una variable
        //FORMULA MICHELLE
        value = value - realOffset;

        if (value < 65) {
          value = value + 26;
        }

        //value = ((value - 65 - offset) % 26) + 65;
        let transformedChar = String.fromCharCode(value);
        finalString = finalString + transformedChar;
      }
    }

    return finalString;
  },
};

export default cipher;

//export function encode(offset, text) {
//conocer longitud del texto
//iterar sobre la palabra de acuerdo a la longitud
//obtener el codigo ASCII de las letras
//Sumar el offset
//traduce a letras el código ASCII
//validar valor de la letra + offset no sea mayor que ascii de Z

