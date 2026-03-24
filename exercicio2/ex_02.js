let corpo = window.document.body;

corpo.style.background = "#331515";
corpo.style.color = "#fff";
corpo.style.textAlign = "center";
corpo.style.fontSize = "22px";
corpo.style.fontFamily = "Verdana";

let numeros = [8, 9, 7];
let numeros2 = [4, 5, 6];

let media = (numeros[0] + numeros[1] + numeros[2]) / 3;
let media2 = (numeros2[0] + numeros2[1] + numeros2[2]) / 3;

let somaMedias = media + media2;

numeros.forEach((numeros, index) => {
  document.writeln(`Número lista 1 ${index + 1}: ${numeros} <br>`);
});

document.writeln(`Média: ${media} <br> <br>`);

numeros2.forEach((numeros2, index) => {
  document.writeln(`Número lista 2 ${index + 1}: ${numeros2} <br>`);
});

document.writeln(`Média: ${media2} <br> <br>`);

document.writeln(`Soma das duas médias: ${somaMedias} <br> <br>`);
document.writeln(`Média das duas médias: ${somaMedias / 2} <br> <br>`);