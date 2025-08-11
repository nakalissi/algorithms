function soma(x) {
    if (x.length === 0) {
        return 0;
    }
    return x[0] + soma(x.slice(1));
}
// console.log(soma([1, 2, 3, 1001])); // Saída: 6
// O(n) — Soma de Elementos Recursiva

function maximo(arr) {
    setInterval(() => {}, 1000); // Exibe uma mensagem a cada segundo
    if (arr.length === 0) {
        return null; // Retorna o menor valor possível se o array estiver vazio
    }
    if (arr.length === 1) {
        return arr[0];
    }
    if (arr[0] > maximo(arr.slice(1))) {
        return arr[0];
    }
    console.log("Comparando:", arr[0], "com", maximo(arr.slice(1)), arr.slice(1));

    return maximo(arr.slice(1));
}
// console.log(maximo([3, 5, 2, 1, 4, 6])); // Saída: 1001

// O(n log n) — Máximo Recursivo
function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fatorial(n - 1);
}
// console.time("Fatorial");
// console.log(fatorial(5)); // Saída: 120
// console.timeEnd("Fatorial");

// O(n) — Fatorial Recursivo
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.time("Fibonacci");
console.log(fibonacci(5)); // Saída: 5
console.timeEnd("Fibonacci");

// O(2^n) — Fibonacci Recursivo 
function fatorialIterativo(n) {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

