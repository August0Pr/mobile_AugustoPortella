function ehPrimo(numero) {
    if (numero < 2) {
        return false;
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

let N = 20;

for (let i = 1; i <= N; i++) {
    if (ehPrimo(i)) {
        console.log(i);
    }
}