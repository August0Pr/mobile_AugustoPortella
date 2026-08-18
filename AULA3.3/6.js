const numeros = [5, 10, 15, 20];

let soma = 0;

for (const n of numeros) {
  soma += n;
}

const media = soma / numeros.length;

for (const n of numeros) {
  if (n > media) {
    console.log(n);
  }
}