// O(n!) — Permutação
function permutacoes(str) {
    if (str.length <= 1) return [str];
    let resultado = [];
    for (let i = 0; i < str.length; i++) {
        console.log(str.slice(0, i), str.slice(i + 1));
        let resto = str.slice(0, i) + str.slice(i + 1);
        
        for (let perm of permutacoes(resto)) {
            console.log(`perm: ${perm}`);
            resultado.push(str[i] + perm);
        }
    }
    return resultado;
}

console.time('permutacoes');
console.log(permutacoes('abcdefgh'));
console.timeEnd('permutacoes');