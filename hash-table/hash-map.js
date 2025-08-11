const caderno = {
    "maça": 0.67,
    "leite": 1.49,
    "abacate": 1.49
}
// console.log(caderno["maça"]); // Saída: 0.67s

const caderno2 = new Map();
caderno2.set("maça", 0.67);

console.log(caderno2.get("maça")); // Saída: 0.67
console.log(caderno2.has("maça")); // Saída: true

console.log(caderno2.get("banana")); // Saída: false
