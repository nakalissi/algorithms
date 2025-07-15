// O(n) — Busca Linear
function buscaLinear(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) return i;
    }
    return -1;
}

// O(n) — Busca Linear
const arr = [10, 20, 30, 40, 50];
console.log(buscaLinear(arr, 30)); // Saída: 2
