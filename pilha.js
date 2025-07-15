
function sauda(nome) {
    console.log('Olá', nome);
    sauda2(nome);
    console.log('Até logo', nome);
    tchau();
}

function sauda2(nome) {
    console.log('Como vai', nome);
}

function tchau() {
    console.log('Tchau');
}
console.log(sauda('João')); // Olá João, Como vai João, Até logo João, Tchau
