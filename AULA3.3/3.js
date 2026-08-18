const numeros = [3, 10, 7, 25, 4];

let maior = numeros[0];

for (const num of numeros) {
  if (num > maior) {
    maior = num;
  }
}

console.log("Maior valor:", maior);