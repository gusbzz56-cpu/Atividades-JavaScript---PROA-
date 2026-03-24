// Style body
let corpo = document.body;

corpo.style.background = "#331515";
corpo.style.color = "#fff";
corpo.style.textAlign = "center";
corpo.style.fontSize = "22px";
corpo.style.fontFamily = "Verdana";

//Exercicio 1
function lerIdade() {
  let idadeAno = parseInt(prompt("Digite a sua idade em anos: "));
  let idadeMeses = parseInt(prompt("Digite a sua idade em meses: "));
  let idadeDias = parseInt(prompt("Digite a sua idade em dias: "));

  let totalDias = 365 * idadeAno + 30 * idadeMeses + idadeDias;

  return document.writeln(
    `${idadeAno} anos, ${idadeMeses} meses e ${idadeDias} dias = ${totalDias} dias`,
  );
}

lerIdade();