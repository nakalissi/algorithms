// O(n * log n) — Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const meio = Math.floor(arr.length / 2);
    const esquerda = mergeSort(arr.slice(0, meio));
    const direita = mergeSort(arr.slice(meio));
    return merge(esquerda, direita);
}
function merge(esq, dir) {
    let resultado = [];
    while (esq.length && dir.length) {
        resultado.push(esq[0] < dir[0] ? esq.shift() : dir.shift());
    }
    console.log(`esq: ${esq}, dir: ${dir}, resultado: ${resultado}`);
    
    return resultado.concat(esq, dir);
}

// const list = Array.from({ length: 1000000 }, () => Math.floor(Math.random() * 1000));
const list = [
    "Lucas", "Ana", "Pedro", "Beatriz", "Carlos", "Fernanda", "Eduardo", "Gabriela",
    "Helena", "Isabela", "João", "Kauã", "Larissa", "Marcos", "Natália", "Otávio",
    "Paula", "Quésia", "Rafael", "Sofia", "Tiago", "Ursula", "Vitor", "William",
    "Xuxa", "Yasmin", "Zeca"
];
console.time('mergeSort');
console.log(mergeSort(list));
console.timeEnd('mergeSort');