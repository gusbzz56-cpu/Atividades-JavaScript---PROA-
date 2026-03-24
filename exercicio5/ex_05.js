let corpo = window.document.body;

corpo.style.background = "#331515";
corpo.style.color = "#fff";
corpo.style.textAlign = "center";
corpo.style.fontSize = "22px";
corpo.style.fontFamily = "Verdana";

let salario = parseFloat(prompt("Digite seu salário: "));
let salarioMinimo = 1412;
let salarioEmMinimo = salario / salarioMinimo;

document.writeln(`Seu salário: ${salario}<br>
  Salário minimo: ${salarioMinimo} <br>
  Seu salário equivale a ${salarioEmMinimo.toFixed(2)} salários mínimos.`);