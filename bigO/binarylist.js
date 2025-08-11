function binarylist(list, item) {
    let baixo = 0;
    let alto = list.length - 1;

    while (baixo <= alto) {
        let meio = Math.floor((baixo + alto) / 2);
        console.log("meio: " + meio);
        
        let chute = list[meio];
        console.log("chute: " + chute);
        
        if (chute === item) {
            console.log("Item encontrado: " + chute);
            return meio;
        }
        if (chute > item) {
            console.log("Item menor que chute, ajustando alto para: " + (meio - 1));
            
            alto = meio - 1;
        } else {
            console.log("Item maior que chute, ajustando baixo para: " + (meio + 1));
            
            baixo = meio + 1;
        }
    }
}

const list = Array.from({ length: 100000000 }, (_, i) => i);
console.time('binarylist');
binarylist(list, 1552);
console.timeEnd('binarylist');