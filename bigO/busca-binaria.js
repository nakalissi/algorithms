// O(log n) — Busca Binária
function buscaBinaria(arr, item) {
    let baixo = 0, alto = arr.length - 1;
    while (baixo <= alto) {
        let meio = Math.floor((baixo + alto) / 2);
        if (arr[meio] === item) return meio;
        if (arr[meio] > item) alto = meio - 1;
        else baixo = meio + 1;
    }
    return -1;
}

// O(log n) — Busca Binária
const arrOrdenado = [1, 3, 5, 7, 9, 11];
console.log(buscaBinaria(arrOrdenado, 7)); // Saída: 3
