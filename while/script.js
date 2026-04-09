// ============================================================
// EXERCÍCIOS DE ESTRUTURAS DE REPETIÇÃO
// ============================================================


// ============================================================
// WHILE — Questões 1 a 15
// ============================================================


// Q1: Faça um programa que exiba os números de 1 a 10 usando o loop "while".
function q1() {
  let resultado = "";
  let i = 1;

  while (i <= 10) {
    resultado += i + "\n";
    i++;
  }

  document.getElementById("s1").textContent = resultado;
}


// Q2: Escreva um programa que calcule a soma dos números de 1 a 100 usando o loop "while".
function q2() {
  let soma = 0;
  let i = 1;

  while (i <= 100) {
    soma += i;
    i++;
  }

  document.getElementById("s2").textContent = "Soma = " + soma;
}


// Q3: Crie um programa que exiba os números pares de 1 a 50 usando o loop "while".
function q3() {
  let resultado = "";
  let i = 2;

  while (i <= 50) {
    resultado += i + "\n";
    i += 2;
  }

  document.getElementById("s3").textContent = resultado;
}


// Q4: Faça um programa que leia 5 números inteiros usando o loop "while"
// e exiba a média aritmética dos valores lidos.
function q4() {
  let numeros = [
    parseFloat(document.getElementById("q4n1").value),
    parseFloat(document.getElementById("q4n2").value),
    parseFloat(document.getElementById("q4n3").value),
    parseFloat(document.getElementById("q4n4").value),
    parseFloat(document.getElementById("q4n5").value)
  ];

  let soma = 0;
  let i = 0;

  while (i < 5) {
    soma += numeros[i];
    i++;
  }

  let media = soma / 5;
  document.getElementById("s4").textContent = "Média = " + media;
}


// Q5: Escreva um programa que leia um número inteiro e exiba a tabuada
// desse número até o décimo valor usando o loop "while".
function q5() {
  let n = parseInt(document.getElementById("q5n").value);
  let resultado = "";
  let i = 1;

  while (i <= 10) {
    resultado += n + " x " + i + " = " + (n * i) + "\n";
    i++;
  }

  document.getElementById("s5").textContent = resultado;
}


// Q6: Crie um programa que leia um número inteiro positivo e exiba
// todos os divisores desse número usando o loop "while".
function q6() {
  let n = parseInt(document.getElementById("q6n").value);
  let resultado = "Divisores de " + n + ": ";
  let i = 1;

  while (i <= n) {
    if (n % i === 0) {
      resultado += i + " ";
    }
    i++;
  }

  document.getElementById("s6").textContent = resultado;
}


// Q7: Faça um programa que leia um número inteiro e exiba se ele é
// um número primo usando o loop "while".
function q7() {
  let n = parseInt(document.getElementById("q7n").value);
  let primo = true;
  let i = 2;

  if (n < 2) {
    primo = false;
  }

  while (i <= Math.sqrt(n)) {
    if (n % i === 0) {
      primo = false;
      break;
    }
    i++;
  }

  document.getElementById("s7").textContent = n + (primo ? " é primo." : " não é primo.");
}


// Q8: Escreva um programa que leia um número inteiro e exiba a
// sequência de Fibonacci até o número lido usando o loop "while".
function q8() {
  let limite = parseInt(document.getElementById("q8n").value);
  let resultado = "";
  let a = 0;
  let b = 1;

  while (a <= limite) {
    resultado += a + "\n";
    let temp = a + b;
    a = b;
    b = temp;
  }

  document.getElementById("s8").textContent = resultado;
}


// Q9: Crie um programa que leia o nome e a idade de 5 pessoas
// usando o loop "while" e exiba a média das idades.
function q9() {
  let nomes  = [
    document.getElementById("q9nome1").value,
    document.getElementById("q9nome2").value,
    document.getElementById("q9nome3").value,
    document.getElementById("q9nome4").value,
    document.getElementById("q9nome5").value
  ];
  let idades = [
    parseFloat(document.getElementById("q9idade1").value),
    parseFloat(document.getElementById("q9idade2").value),
    parseFloat(document.getElementById("q9idade3").value),
    parseFloat(document.getElementById("q9idade4").value),
    parseFloat(document.getElementById("q9idade5").value)
  ];

  let soma = 0;
  let i = 0;
  let resultado = "";

  while (i < 5) {
    resultado += nomes[i] + " — " + idades[i] + " anos\n";
    soma += idades[i];
    i++;
  }

  resultado += "\nMédia das idades = " + (soma / 5).toFixed(2);
  document.getElementById("s9").textContent = resultado;
}


// Q10: Faça um programa que exiba os primeiros 20 números da
// sequência de Fibonacci usando o loop "while".
function q10() {
  let resultado = "";
  let a = 0;
  let b = 1;
  let count = 0;

  while (count < 20) {
    resultado += a + "\n";
    let temp = a + b;
    a = b;
    b = temp;
    count++;
  }

  document.getElementById("s10").textContent = resultado;
}


// Q11: Escreva um programa que leia um número inteiro e exiba a
// soma de todos os números pares entre 1 e o número lido usando o loop "while".
function q11() {
  let n = parseInt(document.getElementById("q11n").value);
  let soma = 0;
  let i = 2;

  while (i <= n) {
    soma += i;
    i += 2;
  }

  document.getElementById("s11").textContent = "Soma dos pares de 1 a " + n + " = " + soma;
}


// Q12: Crie um programa que exiba os números ímpares de 1 a 50
// usando o loop "while".
function q12() {
  let resultado = "";
  let i = 1;

  while (i <= 50) {
    resultado += i + "\n";
    i += 2;
  }

  document.getElementById("s12").textContent = resultado;
}


// Q13: Faça um programa que leia um número inteiro e exiba os seus
// dígitos separadamente usando o loop "while".
function q13() {
  let n = document.getElementById("q13n").value;
  let digitos = String(Math.abs(parseInt(n)));
  let resultado = "";
  let i = 0;

  while (i < digitos.length) {
    resultado += "Dígito " + (i + 1) + ": " + digitos[i] + "\n";
    i++;
  }

  document.getElementById("s13").textContent = resultado;
}


// Q14: Escreva um programa que calcule o fatorial de um número
// inteiro inserido pelo usuário usando o loop "while".
function q14() {
  let n = parseInt(document.getElementById("q14n").value);
  let fatorial = 1;
  let i = 2;

  while (i <= n) {
    fatorial *= i;
    i++;
  }

  document.getElementById("s14").textContent = n + "! = " + fatorial;
}


// Q15: Crie um programa que leia o nome e a idade de várias pessoas
// usando o loop "while" até que o nome "fim" seja informado.
// Ao final, exiba a média das idades.

let pessoas15 = [];

function q15adicionar() {
  let nome  = document.getElementById("q15nome").value.trim();
  let idade = parseFloat(document.getElementById("q15idade").value);

  if (nome.toLowerCase() === "fim") {
    q15calcular();
    return;
  }

  if (nome === "" || isNaN(idade)) {
    document.getElementById("s15").textContent = "Preencha nome e idade antes de adicionar.";
    return;
  }

  pessoas15.push({ nome, idade });
  document.getElementById("q15nome").value  = "";
  document.getElementById("q15idade").value = "";
  document.getElementById("s15").textContent = pessoas15.length + " pessoa(s) adicionada(s). Digite 'fim' ou clique em Calcular média.";
}

function q15calcular() {
  if (pessoas15.length === 0) {
    document.getElementById("s15").textContent = "Nenhuma pessoa adicionada.";
    return;
  }

  let soma = 0;
  let i = 0;
  let resultado = "";

  while (i < pessoas15.length) {
    resultado += pessoas15[i].nome + " — " + pessoas15[i].idade + " anos\n";
    soma += pessoas15[i].idade;
    i++;
  }

  resultado += "\nMédia das idades = " + (soma / pessoas15.length).toFixed(2);
  document.getElementById("s15").textContent = resultado;
  pessoas15 = [];
}


// ============================================================
// DO-WHILE — Questões 16 a 30
// ============================================================


// Q16: Faça um programa que exiba os números de 1 a 10 usando o loop "do-while".
function q16() {
  let resultado = "";
  let i = 1;

  do {
    resultado += i + "\n";
    i++;
  } while (i <= 10);

  document.getElementById("s16").textContent = resultado;
}


// Q17: Escreva um programa que calcule a soma dos números de 1 a 100 usando o loop "do-while".
function q17() {
  let soma = 0;
  let i = 1;

  do {
    soma += i;
    i++;
  } while (i <= 100);

  document.getElementById("s17").textContent = "Soma = " + soma;
}


// Q18: Crie um programa que exiba os números pares de 1 a 50 usando o loop "do-while".
function q18() {
  let resultado = "";
  let i = 2;

  do {
    resultado += i + "\n";
    i += 2;
  } while (i <= 50);

  document.getElementById("s18").textContent = resultado;
}


// Q19: Faça um programa que leia 5 números inteiros usando o loop "do-while"
// e exiba a média aritmética dos valores lidos.
function q19() {
  let numeros = [
    parseFloat(document.getElementById("q19n1").value),
    parseFloat(document.getElementById("q19n2").value),
    parseFloat(document.getElementById("q19n3").value),
    parseFloat(document.getElementById("q19n4").value),
    parseFloat(document.getElementById("q19n5").value)
  ];

  let soma = 0;
  let i = 0;

  do {
    soma += numeros[i];
    i++;
  } while (i < 5);

  document.getElementById("s19").textContent = "Média = " + (soma / 5);
}


// Q20: Escreva um programa que leia um número inteiro e exiba a tabuada
// desse número até o décimo valor usando o loop "do-while".
function q20() {
  let n = parseInt(document.getElementById("q20n").value);
  let resultado = "";
  let i = 1;

  do {
    resultado += n + " x " + i + " = " + (n * i) + "\n";
    i++;
  } while (i <= 10);

  document.getElementById("s20").textContent = resultado;
}


// Q21: Crie um programa que leia um número inteiro positivo e exiba
// todos os divisores desse número usando o loop "do-while".
function q21() {
  let n = parseInt(document.getElementById("q21n").value);
  let resultado = "Divisores de " + n + ": ";
  let i = 1;

  do {
    if (n % i === 0) {
      resultado += i + " ";
    }
    i++;
  } while (i <= n);

  document.getElementById("s21").textContent = resultado;
}


// Q22: Faça um programa que leia um número inteiro e exiba se ele é
// um número primo usando o loop "do-while".
function q22() {
  let n = parseInt(document.getElementById("q22n").value);
  let primo = true;
  let i = 2;

  if (n < 2) {
    primo = false;
  } else {
    do {
      if (n % i === 0) {
        primo = false;
        break;
      }
      i++;
    } while (i <= Math.sqrt(n));
  }

  document.getElementById("s22").textContent = n + (primo ? " é primo." : " não é primo.");
}


// Q23: Escreva um programa que leia um número inteiro e exiba a
// sequência de Fibonacci até o número lido usando o loop "do-while".
function q23() {
  let limite = parseInt(document.getElementById("q23n").value);
  let resultado = "";
  let a = 0;
  let b = 1;

  if (a > limite) {
    document.getElementById("s23").textContent = "Nenhum número da sequência é menor ou igual a " + limite;
    return;
  }

  do {
    resultado += a + "\n";
    let temp = a + b;
    a = b;
    b = temp;
  } while (a <= limite);

  document.getElementById("s23").textContent = resultado;
}


// Q24: Crie um programa que leia o nome e a idade de 5 pessoas
// usando o loop "do-while" e exiba a média das idades.
function q24() {
  let nomes = [
    document.getElementById("q24nome1").value,
    document.getElementById("q24nome2").value,
    document.getElementById("q24nome3").value,
    document.getElementById("q24nome4").value,
    document.getElementById("q24nome5").value
  ];
  let idades = [
    parseFloat(document.getElementById("q24idade1").value),
    parseFloat(document.getElementById("q24idade2").value),
    parseFloat(document.getElementById("q24idade3").value),
    parseFloat(document.getElementById("q24idade4").value),
    parseFloat(document.getElementById("q24idade5").value)
  ];

  let soma = 0;
  let i = 0;
  let resultado = "";

  do {
    resultado += nomes[i] + " — " + idades[i] + " anos\n";
    soma += idades[i];
    i++;
  } while (i < 5);

  resultado += "\nMédia das idades = " + (soma / 5).toFixed(2);
  document.getElementById("s24").textContent = resultado;
}


// Q25: Faça um programa que exiba os primeiros 20 números da
// sequência de Fibonacci usando o loop "do-while".
function q25() {
  let resultado = "";
  let a = 0;
  let b = 1;
  let count = 0;

  do {
    resultado += a + "\n";
    let temp = a + b;
    a = b;
    b = temp;
    count++;
  } while (count < 20);

  document.getElementById("s25").textContent = resultado;
}


// Q26: Escreva um programa que leia um número inteiro e exiba a
// soma de todos os números pares entre 1 e o número lido usando o loop "do-while".
function q26() {
  let n = parseInt(document.getElementById("q26n").value);
  let soma = 0;
  let i = 2;

  if (n < 2) {
    document.getElementById("s26").textContent = "Não há pares entre 1 e " + n;
    return;
  }

  do {
    soma += i;
    i += 2;
  } while (i <= n);

  document.getElementById("s26").textContent = "Soma dos pares de 1 a " + n + " = " + soma;
}


// Q27: Crie um programa que exiba os números ímpares de 1 a 50
// usando o loop "do-while".
function q27() {
  let resultado = "";
  let i = 1;

  do {
    resultado += i + "\n";
    i += 2;
  } while (i <= 50);

  document.getElementById("s27").textContent = resultado;
}


// Q28: Faça um programa que leia um número inteiro e exiba os seus
// dígitos separadamente usando o loop "do-while".
function q28() {
  let n = document.getElementById("q28n").value;
  let digitos = String(Math.abs(parseInt(n)));
  let resultado = "";
  let i = 0;

  do {
    resultado += "Dígito " + (i + 1) + ": " + digitos[i] + "\n";
    i++;
  } while (i < digitos.length);

  document.getElementById("s28").textContent = resultado;
}


// Q29: Escreva um programa que calcule o fatorial de um número
// inteiro inserido pelo usuário usando o loop "do-while".
function q29() {
  let n = parseInt(document.getElementById("q29n").value);
  let fatorial = 1;
  let i = 2;

  if (n >= 2) {
    do {
      fatorial *= i;
      i++;
    } while (i <= n);
  }

  document.getElementById("s29").textContent = n + "! = " + fatorial;
}


// Q30: Crie um programa que leia o nome e a idade de várias pessoas
// usando o loop "do-while" até que o nome "fim" seja informado.
// Ao final, exiba a média das idades.

let pessoas30 = [];

function q30adicionar() {
  let nome  = document.getElementById("q30nome").value.trim();
  let idade = parseFloat(document.getElementById("q30idade").value);

  if (nome.toLowerCase() === "fim") {
    q30calcular();
    return;
  }

  if (nome === "" || isNaN(idade)) {
    document.getElementById("s30").textContent = "Preencha nome e idade antes de adicionar.";
    return;
  }

  pessoas30.push({ nome, idade });
  document.getElementById("q30nome").value  = "";
  document.getElementById("q30idade").value = "";
  document.getElementById("s30").textContent = pessoas30.length + " pessoa(s) adicionada(s).";
}

function q30calcular() {
  if (pessoas30.length === 0) {
    document.getElementById("s30").textContent = "Nenhuma pessoa adicionada.";
    return;
  }

  let soma = 0;
  let i = 0;
  let resultado = "";

  do {
    resultado += pessoas30[i].nome + " — " + pessoas30[i].idade + " anos\n";
    soma += pessoas30[i].idade;
    i++;
  } while (i < pessoas30.length);

  resultado += "\nMédia das idades = " + (soma / pessoas30.length).toFixed(2);
  document.getElementById("s30").textContent = resultado;
  pessoas30 = [];
}


// ============================================================
// FOR — Questões 31 a 45
// ============================================================


// Q31: Faça um programa que exiba os números de 1 a 10.
function q31() {
  let resultado = "";

  for (let i = 1; i <= 10; i++) {
    resultado += i + "\n";
  }

  document.getElementById("s31").textContent = resultado;
}


// Q32: Escreva um programa que calcule a soma dos números de 1 a 100.
function q32() {
  let soma = 0;

  for (let i = 1; i <= 100; i++) {
    soma += i;
  }

  document.getElementById("s32").textContent = "Soma = " + soma;
}


// Q33: Crie um programa que exiba os números pares de 1 a 50.
function q33() {
  let resultado = "";

  for (let i = 2; i <= 50; i += 2) {
    resultado += i + "\n";
  }

  document.getElementById("s33").textContent = resultado;
}


// Q34: Faça um programa que leia 5 números inteiros e exiba a média aritmética dos valores lidos.
function q34() {
  let numeros = [
    parseFloat(document.getElementById("q34n1").value),
    parseFloat(document.getElementById("q34n2").value),
    parseFloat(document.getElementById("q34n3").value),
    parseFloat(document.getElementById("q34n4").value),
    parseFloat(document.getElementById("q34n5").value)
  ];

  let soma = 0;

  for (let i = 0; i < 5; i++) {
    soma += numeros[i];
  }

  document.getElementById("s34").textContent = "Média = " + (soma / 5);
}


// Q35: Escreva um programa que leia um número inteiro e exiba a tabuada
// desse número até o décimo valor.
function q35() {
  let n = parseInt(document.getElementById("q35n").value);
  let resultado = "";

  for (let i = 1; i <= 10; i++) {
    resultado += n + " x " + i + " = " + (n * i) + "\n";
  }

  document.getElementById("s35").textContent = resultado;
}


// Q36: Crie um programa que leia um número inteiro positivo e exiba
// todos os divisores desse número.
function q36() {
  let n = parseInt(document.getElementById("q36n").value);
  let resultado = "Divisores de " + n + ": ";

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      resultado += i + " ";
    }
  }

  document.getElementById("s36").textContent = resultado;
}


// Q37: Faça um programa que leia um número inteiro e exiba se ele é
// um número primo.
function q37() {
  let n = parseInt(document.getElementById("q37n").value);
  let primo = true;

  if (n < 2) {
    primo = false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      primo = false;
      break;
    }
  }

  document.getElementById("s37").textContent = n + (primo ? " é primo." : " não é primo.");
}


// Q38: Escreva um programa que leia um número inteiro e exiba a
// sequência de Fibonacci até o número lido.
function q38() {
  let limite = parseInt(document.getElementById("q38n").value);
  let resultado = "";
  let a = 0;
  let b = 1;

  for (; a <= limite;) {
    resultado += a + "\n";
    let temp = a + b;
    a = b;
    b = temp;
  }

  document.getElementById("s38").textContent = resultado;
}


// Q39: Crie um programa que leia o nome e a idade de 5 pessoas
// e exiba a média das idades.
function q39() {
  let nomes = [
    document.getElementById("q39nome1").value,
    document.getElementById("q39nome2").value,
    document.getElementById("q39nome3").value,
    document.getElementById("q39nome4").value,
    document.getElementById("q39nome5").value
  ];
  let idades = [
    parseFloat(document.getElementById("q39idade1").value),
    parseFloat(document.getElementById("q39idade2").value),
    parseFloat(document.getElementById("q39idade3").value),
    parseFloat(document.getElementById("q39idade4").value),
    parseFloat(document.getElementById("q39idade5").value)
  ];

  let soma = 0;
  let resultado = "";

  for (let i = 0; i < 5; i++) {
    resultado += nomes[i] + " — " + idades[i] + " anos\n";
    soma += idades[i];
  }

  resultado += "\nMédia das idades = " + (soma / 5).toFixed(2);
  document.getElementById("s39").textContent = resultado;
}


// Q40: Faça um programa que exiba os primeiros 20 números da
// sequência de Fibonacci.
function q40() {
  let resultado = "";
  let a = 0;
  let b = 1;

  for (let count = 0; count < 20; count++) {
    resultado += a + "\n";
    let temp = a + b;
    a = b;
    b = temp;
  }

  document.getElementById("s40").textContent = resultado;
}


// Q41: Escreva um programa que leia um número inteiro e exiba a
// soma de todos os números pares entre 1 e o número lido.
function q41() {
  let n = parseInt(document.getElementById("q41n").value);
  let soma = 0;

  for (let i = 2; i <= n; i += 2) {
    soma += i;
  }

  document.getElementById("s41").textContent = "Soma dos pares de 1 a " + n + " = " + soma;
}


// Q42: Crie um programa que exiba os números ímpares de 50 a 1.
function q42() {
  let resultado = "";

  for (let i = 49; i >= 1; i -= 2) {
    resultado += i + "\n";
  }

  document.getElementById("s42").textContent = resultado;
}


// Q43: Faça um programa que leia um número inteiro e exiba os seus
// dígitos separadamente.
function q43() {
  let n = document.getElementById("q43n").value;
  let digitos = String(Math.abs(parseInt(n)));
  let resultado = "";

  for (let i = 0; i < digitos.length; i++) {
    resultado += "Dígito " + (i + 1) + ": " + digitos[i] + "\n";
  }

  document.getElementById("s43").textContent = resultado;
}


// Q44: Escreva um programa que calcule o fatorial de um número
// inteiro inserido pelo usuário.
function q44() {
  let n = parseInt(document.getElementById("q44n").value);
  let fatorial = 1;

  for (let i = 2; i <= n; i++) {
    fatorial *= i;
  }

  document.getElementById("s44").textContent = n + "! = " + fatorial;
}


// Q45: Crie um programa que leia o nome e a idade de várias pessoas
// até que o nome "fim" seja informado. Ao final, exiba a média das idades.

let pessoas45 = [];

function q45adicionar() {
  let nome  = document.getElementById("q45nome").value.trim();
  let idade = parseFloat(document.getElementById("q45idade").value);

  if (nome.toLowerCase() === "fim") {
    q45calcular();
    return;
  }

  if (nome === "" || isNaN(idade)) {
    document.getElementById("s45").textContent = "Preencha nome e idade antes de adicionar.";
    return;
  }

  pessoas45.push({ nome, idade });
  document.getElementById("q45nome").value  = "";
  document.getElementById("q45idade").value = "";
  document.getElementById("s45").textContent = pessoas45.length + " pessoa(s) adicionada(s).";
}

function q45calcular() {
  if (pessoas45.length === 0) {
    document.getElementById("s45").textContent = "Nenhuma pessoa adicionada.";
    return;
  }

  let soma = 0;
  let resultado = "";

  for (let i = 0; i < pessoas45.length; i++) {
    resultado += pessoas45[i].nome + " — " + pessoas45[i].idade + " anos\n";
    soma += pessoas45[i].idade;
  }

  resultado += "\nMédia das idades = " + (soma / pessoas45.length).toFixed(2);
  document.getElementById("s45").textContent = resultado;
  pessoas45 = [];
}
