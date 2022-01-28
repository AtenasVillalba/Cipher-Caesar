import cipher from "./cipher.js";

window.PushEncode = function PushEncode() {
  let offset = document.getElementById("offset").value;
  let text = document.getElementById("text").value;
  if (!offset || !text) {
    alert("Introduce Correctamente los datos.");
  } else {
    let test = cipher.encode(parseInt(offset), text);
    console.log(`Text to encode: ${test}`);
    document.getElementById("translation").value = test;
  }
};

window.PushDecode = function PushDecode() {
  let offset = document.getElementById("offset").value;
  let text = document.getElementById("text").value;
  if (!offset || !text) {
    alert("Introduce correctamente los datos");
  } else {
    let test = cipher.decode(parseInt(offset), text);
    console.log(`Text to decode: ${test}`);
    document.getElementById("translation").value = test;
  }
};

/*

window.PushEncodeEvent = function encodeEvent() {
  let offset = document.getElementById("Offset").value;
  let text = document.getElementById("text").value;

  

  //let result = encode(offset, text);
};


*/

/*if(displacement === null || displacement === 0){
    throw new TypeError()
} */
