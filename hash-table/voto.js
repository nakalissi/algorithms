voted = {
    "João": false,
    "Maria": false,
    "Pedro": true,
};
function verificaEleitor(nome) {
    console.log(voted[nome]);
    
    if (voted[nome]) {
        console.log("Você já votou!");
        return true;
    } else {
        voted[nome] = true;
        console.log("Obrigado por votar!");
        return false;
    }
}
console.log(verificaEleitor("João")); // Saída: Obrigado por votar!
console.log(verificaEleitor("Pedro")); // Saída: Você já votou!
console.log(voted);
