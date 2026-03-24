let corpo = window.document.body;

corpo.style.background = "#331515";
corpo.style.color = "#fff";
corpo.style.textAlign = "center";
corpo.style.fontSize = "22px";
corpo.style.fontFamily = "Verdana";

let numeroInteiro = Number(prompt("Digite um número inteiro: "));

document.writeln(`O antecessor de ${numeroInteiro} é ${numeroInteiro - 1}`);
document.writeln(`<br> O Sucessor de ${numeroInteiro} é ${numeroInteiro + 1}`);