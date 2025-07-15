// O(n²) — Bubble Sort
function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

const list = [
    "Lucas", "Ana", "Pedro", "Beatriz", "Carlos", "Fernanda", "Eduardo", "Gabriela",
    "Helena", "Isabela", "João", "Kauã", "Larissa", "Marcos", "Natália", "Otávio",
    "Paula", "Quésia", "Rafael", "Sofia", "Tiago", "Ursula", "Vitor", "William",
    "Xuxa", "Yasmin", "Zeca"
];

console.time('bubbleSort');
console.log(bubbleSort(list));
console.timeEnd('bubbleSort');