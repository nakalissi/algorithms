function one(str) {
    const hash = new Map();
    // retorne 1 para qualquer entrada
    // use o cumprimento da string como o índice
    for (let i = 0; i < str.length; i++) {
        hash.set(str[i], i);
    }
    return hash;
}
// console.log(one('abs'));

function isPrimo(x) {
    if (x === 2) return true;
    for (let j = 0; j < Math.sqrt(x); j++) {
        if (x % j === 0) {
            return false;
        }
    }
    return true;
}

function primo(str) {
    // mapeie cada letra para um número primo
    const hash = new Map();
    let soma = 2;
    for (let i = 0; i <= str.length; i++) {
        let primo = true;
        for (let j = 0; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                primo = false;
            }
        }
        if (primo) {
            hash.set(str[i], i);
        }
    }
}
// console.log(fn('abcdefghijk'));


// mapeie cada letra para um número primo: a = , b = 3. c =5, d = 7, e =11 e assim por diante, para uma string a função hash é a soma de todos os caracteres-módulo² conforme o tamanho da hash, se o tamanho de sua hash for 10 e a string "bag", o índice será (3 + 2 + 17) % 10 = 22 % 10 = 2. Para cada um destes exemplos, qual funcção hash fornecerá uma boa distribuição? Considere que o tamanho da tabela hash tenha dez espaços.
function hash(str) {
    const hash = new Map();
    let soma = 0;
    for (let i = 0; i < str.length; i++) {
        soma += str.charCodeAt(i) ** 2;
        hash.set(str[i], soma);
    }
    console.log(soma);
    
    return soma % 10;
}
// console.time("hash");
// console.log(hash('bag'));
// console.timeEnd("hash");

// uma lista telefônica em que as chaves são os nomes e os valores são os números telefônicos. Os nomes são os seguintes: Esther, Ben, Bob e Dan
function listaTelefonica(arr) {
    const hash = new Map();
    for (let i = 0; i < arr.length; i++) {
        hash.set(arr[i], i);
    }
    return hash;
}
// console.log(listaTelefonica(['Esther', 'Ben', 'Bob', 'Dan']));

// um mapeamento do tamanho de baterias e sua devida potência. Os tamanhos são A, AA, AAA e AAAA.
function baterias(arr) {
    const hash = new Map();
    for (let i = 0; i < arr.length; i++) {
        hash.set(arr[i], i);
    }
    hash.get('A');
    return hash;
}
console.log(baterias(['A', 'AA', 'AAA', 'AAAA']));
