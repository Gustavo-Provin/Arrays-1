//DESAFIO 1

/*let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(`Matriz: ${matriz[i][j]}`);
    }
}

let matriz2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for (let linha of matriz2) {
    for (let elemento of linha) {
        console.log(`For of: ${elemento}`);
    }
}*/


//DESAFIO 2

/*const anosCopa = [1958, 1962, 1970, 1994, 2002];

console.log("Anos em que o Brasil ganhou a Copa do Mundo:");
for (const ano of anosCopa) {
    console.log(ano);
}*/


//DESAFIO 3

/*const notas = [];
let continuar = true;

while (continuar) {
  let nota = parseFloat(prompt("Insira a nota do aluno (de 0 a 10) ou digite 'fim' para encerrar:"));

  if (nota >= 0 && nota <= 10) {
    notas.push(nota);
  } else if (nota || nota === 0) {
    alert("Por favor, insira uma nota válida de 0 a 10.");
  } else {
    continuar = false;
  }
}

if (notas.length > 0) {
  let soma = 0;
  for (let i = 0; i < notas.length; soma += notas[i++]);

  const media = soma / notas.length;

  alert("As notas inseridas foram: " + notas.join(", "));
  alert("A média das notas é: " + media.toFixed(2));

  alert(media >= 7 ? "O aluno foi aprovado!" : "O aluno foi reprovado.");
} else {
  alert("Nenhuma nota foi inserida.");
}*/

