// ===============================================
//  atividade_vetores.js
//  Lógica das 30 questões — Vetores & Matrizes
// ===============================================

// ---- INICIALIZAÇÃO DOS INPUTS ----

window.addEventListener('DOMContentLoaded', () => {
  // Gera inputs para vetores
  document.querySelectorAll('.inline-inputs').forEach(container => {
    const count = parseInt(container.dataset.count);
    const id    = container.dataset.id;
    const type  = container.dataset.type || 'number';

    for (let i = 0; i < count; i++) {
      const input = document.createElement('input');
      input.type        = type === 'text' ? 'text' : 'number';
      input.id          = `q${id}_${i}`;
      input.placeholder = type === 'text' ? `Nome ${i + 1}` : (i + 1);
      container.appendChild(input);
    }
  });

  // Gera inputs para matrizes
  document.querySelectorAll('.matrix-inputs').forEach(container => {
    const rows = parseInt(container.dataset.rows);
    const cols = parseInt(container.dataset.cols);
    const id   = container.dataset.id;

    const grid = document.createElement('div');
    grid.className = 'matrix-grid';
    grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const input = document.createElement('input');
        input.type        = 'number';
        input.id          = `m${id}_${i}_${j}`;
        input.placeholder = `${i},${j}`;
        grid.appendChild(input);
      }
    }
    container.appendChild(grid);
  });

  // Navegação entre seções
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.exercise-section').forEach(s => s.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.section).classList.add('active');
    });
  });
});

// ---- HELPERS ----

// Lê os valores de um vetor de inputs pelo prefixo de ID e quantidade
function lerVetor(id, count) {
  const nums = [];
  for (let i = 0; i < count; i++) {
    const val = document.getElementById(`q${id}_${i}`).value.trim();
    nums.push(Number(val));
  }
  return nums;
}

// Lê os valores de texto de um vetor
function lerVetorTexto(id, count) {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(document.getElementById(`q${id}_${i}`).value.trim());
  }
  return arr;
}

// Lê uma matriz de inputs pelo prefixo de ID e dimensões
function lerMatriz(id, rows, cols) {
  const mat = [];
  for (let i = 0; i < rows; i++) {
    mat[i] = [];
    for (let j = 0; j < cols; j++) {
      mat[i][j] = Number(document.getElementById(`m${id}_${i}_${j}`).value) || 0;
    }
  }
  return mat;
}

// Exibe o resultado no output do card
function mostrar(outId, texto, isError = false) {
  const el = document.getElementById(`out-${outId}`);
  el.textContent = texto;
  el.className   = 'output visible' + (isError ? ' error' : '');
}

// Formata uma matriz como string de linhas
function formatarMatriz(mat) {
  return mat.map(row => '[ ' + row.join('  ') + ' ]').join('\n');
}

// Exibe uma matriz com grid visual no output
function mostrarMatriz(outId, mat, prefixo = '') {
  const el   = document.getElementById(`out-${outId}`);
  const cols = mat[0].length;

  let html = prefixo ? `<span style="color:var(--text-muted)">${prefixo}</span>\n` : '';

  const grid = document.createElement('div');
  grid.className = 'matrix-out';
  grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

  mat.forEach(row => {
    row.forEach(val => {
      const span = document.createElement('span');
      span.textContent = val;
      grid.appendChild(span);
    });
  });

  el.innerHTML = html;
  el.appendChild(grid);
  el.className = 'output visible';
}

// ============================================================
//  VETORES — Q01 a Q15
// ============================================================

// Q01 — Ordem inversa de 5 números
function run01() {
  const nums = lerVetor('01', 5);
  const inv  = [...nums].reverse();
  mostrar('01', 'Ordem inversa: ' + inv.join(', '));
}

// Q02 — Soma de 10 números
function run02() {
  const nums = lerVetor('02', 10);
  let soma = 0;
  for (let i = 0; i < nums.length; i++) {
    soma = soma + nums[i];
  }
  mostrar('02', 'Soma: ' + soma);
}

// Q03 — Média de 7 números
function run03() {
  const nums = lerVetor('03', 7);
  let soma = 0;
  for (let i = 0; i < nums.length; i++) {
    soma = soma + nums[i];
  }
  const media = soma / nums.length;
  mostrar('03', 'Média aritmética: ' + media.toFixed(2));
}

// Q04 — Quantos são pares (de 5)
function run04() {
  const nums = lerVetor('04', 5);
  let contPares = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      contPares = contPares + 1;
    }
  }
  mostrar('04', 'Quantidade de pares: ' + contPares);
}

// Q05 — Maior e menor de 5 números
function run05() {
  const nums  = lerVetor('05', 5);
  let maior   = nums[0];
  let menor   = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > maior) {
      maior = nums[i];
    }
    if (nums[i] < menor) {
      menor = nums[i];
    }
  }
  mostrar('05', `Maior: ${maior}\nMenor: ${menor}`);
}

// Q06 — Ordem crescente de 10 números (Bubble Sort básico)
function run06() {
  const nums = lerVetor('06', 10);
  // Bubble sort
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp    = nums[j];
        nums[j]     = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  mostrar('06', 'Ordem crescente: ' + nums.join(', '));
}

// Q07 — Quantos positivos de 10
function run07() {
  const nums = lerVetor('07', 10);
  let contPos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      contPos = contPos + 1;
    }
  }
  mostrar('07', 'Quantidade de positivos: ' + contPos);
}

// Q08 — Média dos pares e dos ímpares (de 5)
function run08() {
  const nums    = lerVetor('08', 5);
  let somaPar   = 0, contPar   = 0;
  let somaImpar = 0, contImpar = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      somaPar = somaPar + nums[i];
      contPar = contPar + 1;
    } else {
      somaImpar = somaImpar + nums[i];
      contImpar = contImpar + 1;
    }
  }

  let resultado = '';
  if (contPar > 0) {
    resultado += 'Média dos pares: ' + (somaPar / contPar).toFixed(2) + '\n';
  } else {
    resultado += 'Nenhum número par encontrado.\n';
  }
  if (contImpar > 0) {
    resultado += 'Média dos ímpares: ' + (somaImpar / contImpar).toFixed(2);
  } else {
    resultado += 'Nenhum número ímpar encontrado.';
  }
  mostrar('08', resultado);
}

// Q09 — Quantidade de positivos e negativos (de 10)
function run09() {
  const nums = lerVetor('09', 10);
  let pos    = 0;
  let neg    = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      pos = pos + 1;
    } else if (nums[i] < 0) {
      neg = neg + 1;
    }
  }
  mostrar('09', `Positivos: ${pos}\nNegativos: ${neg}`);
}

// Q10 — Algum igual a zero (de 5)
function run10() {
  const nums   = lerVetor('10', 5);
  let temZero  = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      temZero = true;
    }
  }
  if (temZero) {
    mostrar('10', 'Sim, há pelo menos um número igual a zero.');
  } else {
    mostrar('10', 'Nenhum número é igual a zero.');
  }
}

// Q11 — Soma dos positivos e dos negativos (de 10)
function run11() {
  const nums  = lerVetor('11', 10);
  let somaPos = 0;
  let somaNeg = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      somaPos = somaPos + nums[i];
    } else if (nums[i] < 0) {
      somaNeg = somaNeg + nums[i];
    }
  }
  mostrar('11', `Soma dos positivos: ${somaPos}\nSoma dos negativos: ${somaNeg}`);
}

// Q12 — Ordem decrescente de 5 números (Bubble Sort)
function run12() {
  const nums = lerVetor('12', 5);
  // Bubble sort decrescente
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] < nums[j + 1]) {
        let temp    = nums[j];
        nums[j]     = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  mostrar('12', 'Ordem decrescente: ' + nums.join(', '));
}

// Q13 — Quantos entre 10 e 50 (de 10)
function run13() {
  const nums = lerVetor('13', 10);
  let cont   = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 10 && nums[i] <= 50) {
      cont = cont + 1;
    }
  }
  mostrar('13', `Quantidade no intervalo [10, 50]: ${cont}`);
}

// Q14 — Exibir apenas os pares de 7 números
function run14() {
  const nums = lerVetor('14', 7);
  const pares = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      pares.push(nums[i]);
    }
  }
  if (pares.length > 0) {
    mostrar('14', 'Números pares: ' + pares.join(', '));
  } else {
    mostrar('14', 'Nenhum número par encontrado.');
  }
}

// Q15 — Ordenar 5 nomes alfabeticamente (Bubble Sort com strings)
function run15() {
  const nomes = lerVetorTexto('15', 5);

  // Bubble sort com comparação de strings
  for (let i = 0; i < nomes.length - 1; i++) {
    for (let j = 0; j < nomes.length - 1 - i; j++) {
      if (nomes[j].toLowerCase() > nomes[j + 1].toLowerCase()) {
        let temp      = nomes[j];
        nomes[j]      = nomes[j + 1];
        nomes[j + 1]  = temp;
      }
    }
  }
  mostrar('15', 'Ordem alfabética:\n' + nomes.join('\n'));
}

// ============================================================
//  MATRIZES — Q16 a Q30
// ============================================================

// Q16 — Exibir matriz 3×3
function run16() {
  const mat = lerMatriz('16', 3, 3);
  mostrarMatriz('16', mat);
}

// Q17 — Soma de todos os elementos de 2×2
function run17() {
  const mat = lerMatriz('17', 2, 2);
  let soma  = 0;
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      soma = soma + mat[i][j];
    }
  }
  mostrar('17', 'Soma de todos os elementos: ' + soma);
}

// Q18 — Soma da diagonal principal de 3×3
function run18() {
  const mat   = lerMatriz('18', 3, 3);
  let somaDiag = 0;
  for (let i = 0; i < 3; i++) {
    somaDiag = somaDiag + mat[i][i]; // diagonal principal: linha == coluna
  }
  mostrar('18', 'Soma da diagonal principal: ' + somaDiag);
}

// Q19 — Soma de duas matrizes 2×2
function run19() {
  const matA  = lerMatriz('19a', 2, 2);
  const matB  = lerMatriz('19b', 2, 2);
  const result = [];
  for (let i = 0; i < 2; i++) {
    result[i] = [];
    for (let j = 0; j < 2; j++) {
      result[i][j] = matA[i][j] + matB[i][j];
    }
  }
  mostrarMatriz('19', result, 'A + B =');
}

// Q20 — Maior valor em 3×3
function run20() {
  const mat  = lerMatriz('20', 3, 3);
  let maior  = mat[0][0];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (mat[i][j] > maior) {
        maior = mat[i][j];
      }
    }
  }
  mostrar('20', 'Maior valor da matriz: ' + maior);
}

// Q21 — Média aritmética de 4×4
function run21() {
  const mat = lerMatriz('21', 4, 4);
  let soma  = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      soma = soma + mat[i][j];
    }
  }
  const media = soma / 16; // 4x4 = 16 elementos
  mostrar('21', 'Média aritmética: ' + media.toFixed(2));
}

// Q22 — Produto (multiplicação matricial) de duas 2×2
function run22() {
  const matA  = lerMatriz('22a', 2, 2);
  const matB  = lerMatriz('22b', 2, 2);
  const result = [];

  for (let i = 0; i < 2; i++) {
    result[i] = [];
    for (let j = 0; j < 2; j++) {
      result[i][j] = 0;
      for (let k = 0; k < 2; k++) {
        result[i][j] = result[i][j] + (matA[i][k] * matB[k][j]);
      }
    }
  }
  mostrarMatriz('22', result, 'A × B =');
}

// Q23 — Menor valor em 3×3
function run23() {
  const mat  = lerMatriz('23', 3, 3);
  let menor  = mat[0][0];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (mat[i][j] < menor) {
        menor = mat[i][j];
      }
    }
  }
  mostrar('23', 'Menor valor da matriz: ' + menor);
}

// Q24 — Verificar se 3×3 é simétrica (mat[i][j] == mat[j][i])
function run24() {
  const mat      = lerMatriz('24', 3, 3);
  let simetrica  = true;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (mat[i][j] !== mat[j][i]) {
        simetrica = false;
      }
    }
  }

  if (simetrica) {
    mostrar('24', 'A matriz É simétrica (igual à sua transposta).');
  } else {
    mostrar('24', 'A matriz NÃO é simétrica.');
  }
}

// Q25 — Soma de cada coluna em 4×4
function run25() {
  const mat = lerMatriz('25', 4, 4);
  let resultado = '';

  for (let j = 0; j < 4; j++) {
    let somaCol = 0;
    for (let i = 0; i < 4; i++) {
      somaCol = somaCol + mat[i][j];
    }
    resultado += `Coluna ${j + 1}: ${somaCol}\n`;
  }
  mostrar('25', resultado.trim());
}

// Q26 — Verificar se duas matrizes 2×2 são iguais
function run26() {
  const matA  = lerMatriz('26a', 2, 2);
  const matB  = lerMatriz('26b', 2, 2);
  let iguais  = true;

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      if (matA[i][j] !== matB[i][j]) {
        iguais = false;
      }
    }
  }

  if (iguais) {
    mostrar('26', 'As matrizes SÃO iguais.');
  } else {
    mostrar('26', 'As matrizes NÃO são iguais.');
  }
}

// Q27 — Produto da diagonal secundária de 3×3
// Diagonal secundária: posições [0][2], [1][1], [2][0]
function run27() {
  const mat    = lerMatriz('27', 3, 3);
  let produto  = 1;
  const n      = 3;

  for (let i = 0; i < n; i++) {
    let j     = (n - 1) - i; // coluna da diagonal secundária
    produto   = produto * mat[i][j];
  }
  mostrar('27', 'Produto da diagonal secundária: ' + produto);
}

// Q28 — Maior valor de cada linha em 4×4
function run28() {
  const mat      = lerMatriz('28', 4, 4);
  let resultado  = '';

  for (let i = 0; i < 4; i++) {
    let maiorLinha = mat[i][0];
    for (let j = 1; j < 4; j++) {
      if (mat[i][j] > maiorLinha) {
        maiorLinha = mat[i][j];
      }
    }
    resultado += `Linha ${i + 1}: maior = ${maiorLinha}\n`;
  }
  mostrar('28', resultado.trim());
}

// Q29 — Verificar se 3×3 é identidade
// Identidade: diagonal principal = 1, restante = 0
function run29() {
  const mat       = lerMatriz('29', 3, 3);
  let identidade  = true;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === j) {
        if (mat[i][j] !== 1) {
          identidade = false;
        }
      } else {
        if (mat[i][j] !== 0) {
          identidade = false;
        }
      }
    }
  }

  if (identidade) {
    mostrar('29', 'A matriz É uma matriz identidade.');
  } else {
    mostrar('29', 'A matriz NÃO é uma matriz identidade.');
  }
}

// Q30 — Subtração de duas matrizes 2×2
function run30() {
  const matA  = lerMatriz('30a', 2, 2);
  const matB  = lerMatriz('30b', 2, 2);
  const result = [];

  for (let i = 0; i < 2; i++) {
    result[i] = [];
    for (let j = 0; j < 2; j++) {
      result[i][j] = matA[i][j] - matB[i][j];
    }
  }
  mostrarMatriz('30', result, 'A − B =');
}