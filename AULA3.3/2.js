const notas = [7, 8, 6, 9];

let soma = 0;

for (let i = 0; i < notas.length; i++) {
soma += notas[i];
}

const media = soma / notas.length;

console.log("Média:", media);