let corpo = window.document.body;

corpo.style.background = "#331515";
corpo.style.color = "#fff";
corpo.style.textAlign = "center";
corpo.style.fontSize = "22px";
corpo.style.fontFamily = "Verdana";

let saldo = Number(prompt("Digite o saldo: "));

let reajuste = saldo * 1.01;

document.writeln(
  `Saldo: ${saldo.toFixed(2)} <br> Saldo com reajuste de 1%: ${reajuste.toFixed(2)}`,
);