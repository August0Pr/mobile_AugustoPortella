const palavras = ["sol", "computador", "lua", "javascript", "casa"];

const resultado = palavras
  .filter((p) => p.length > 4)
  .map((p) => p.toUpperCase());

console.log("Palavras originais:", palavras);
console.log("Filtradas e maiúsculas:", resultado);