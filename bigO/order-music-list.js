function buscarMenor(arr) {
    var menorIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[menorIndex]) {
            menorIndex = i;
        }
    }
    return menorIndex;
}

//console.log(buscarMenor([5, 3, 6, 2, 10, 1]));

function ordenacaoPorSelecao(arr) {
    novoArr = [];
    const original = [...arr];
    while (original.length > 0) {
        const menorIndex = buscarMenor(original);
        novoArr.push(original.splice(menorIndex, 1)[0]);
    }
    return novoArr;
}

console.log(ordenacaoPorSelecao([5, 3, 6, 2, 10, 1]));
