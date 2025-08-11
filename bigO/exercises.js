// big O imprimir o valor de cada elemento em um array
function imprimirArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
// console.time("print each");
// console.log(imprimirArray([1, 2, 3, 4, 5])); // Saída: 1 2 3 4 5
// console.timeEnd("print each");

function duplicar(arr) {
    return arr.map(item => item * 2);
}
// console.log(duplicar([1, 2, 3, 4, 5])); // Saída: [2, 4, 6, 8, 10]

function somar(arr) {
    return arr.map((item, index) => {
        if (index === 0) {
            item = item * 2;
        }
        return item;
    });
}
// console.log(somar([1, 2, 3, 4, 5])); // Saída: [2, 2, 3, 4, 5]

function tabelaMultiplicacao(arr) {
    const tabela = [];
    for (let i = 0; i < arr.length; i++) {
        const linha = [];
        console.log("Construir linha para a tabela");
        for (let j = 0; j < arr.length; j++) {
            linha.push(arr[i] * arr[j]);
        }
        tabela.push(linha);
    }
    return tabela;
}
// console.log(tabelaMultiplicacao([1, 2, 3, 4, 5])); // Saída: [[1, 2, 3, 4, 5], [2, 4, 6, 8, 10], ...]
