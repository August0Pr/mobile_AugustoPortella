const nomes = [];

let entrada = "";

while (entrada !== "fim") {
  entrada = prompt("Digite um nome (ou 'fim'):");
  
  if (entrada !== "fim") {
    nomes.push(entrada);
  }
}

console.log(nomes);