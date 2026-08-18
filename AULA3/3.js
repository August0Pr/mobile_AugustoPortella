function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

function verificarSituacao(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

let media = calcularMedia(7, 8, 6);

console.log("Média:", media);
console.log("Situação:", verificarSituacao(media));