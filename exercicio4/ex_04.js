let corpo = window.document.body;

corpo.style.background = "#331515";
corpo.style.color = "#fff";
corpo.style.textAlign = "center";
corpo.style.fontSize = "22px";
corpo.style.fontFamily = "Verdana";

let ipi = parseFloat(prompt("Digite o valor do IPI: "));

function produtos() {
  let valor = [];
  let quantidade = [];

  for (i = 0; i < 2; i++) {
    let codigoPeca = parseFloat(prompt(`Digite o código da peça ${i + 1}: `));
    document.writeln(`Código da peça ${i + 1} = ${codigoPeca} <br>`);
    //
    let valorUnitario = parseFloat(
      prompt(`Digite o valor unitário da peça ${i + 1}: `),
    );
    valor.push(valorUnitario);
    document.writeln(`Valor unitário da peça ${i + 1} = ${valor[i]} <br>`);
    //
    let quantidadePecas = Number(
      prompt(`Digite a quantidade de peças da peça ${i + 1}: `),
    );
    quantidade.push(quantidadePecas);
    document.writeln(
      `Quantidade de peças da peça ${i + 1} = ${quantidade[i]} <br>`,
    );
  }
  //
  let formula =
    (valor[0] * quantidade[0] + valor[1] * quantidade[1]) * (ipi / 100 + 1);

  document.writeln(`Valor total a ser pago: ${formula.toFixed(2)}`);
}

produtos();