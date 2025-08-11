// Algoritmos de recursão
function procurePelaChave(caixaPrincipal) {
    var pilha = [...caixaPrincipal];
    var novoArray = [];
    for (var i = 0; i < pilha.length; i++) {
        if (Array.isArray(pilha[i].caixa)) {
            console.log('Olha dentro da caixa I', pilha[i].caixa);
            for (var j = 0; j < pilha[i].caixa.length; j++) {
                if (Array.isArray(pilha[i].caixa[j].caixa)) {
                    console.log('Olha dentro da caixa J', pilha[i].caixa[j].caixa);
                    for (var k = 0; k < pilha[i].caixa[j].caixa.length; k++) {
                        console.log('Olha dentro da caixa K', pilha[i].caixa[j].caixa[k]);
                        if (Array.isArray(pilha[i].caixa[j].caixa[k])) {
                            console.log('É array');
                        } else {
                            if (pilha[i].caixa[j].caixa[k].caixa === 'chave') {
                                console.log('Encontrada a chave', pilha[i].caixa[j].caixa[k].caixa);
                                return pilha[i].caixa[j].caixa[k].caixa;
                            }
                        }
                    }
                }
            }
        } else {
            if (pilha[i].caixa === 'chave') {
                console.log('Encontrada a chave', pilha[i].caixa);
                return pilha[i].caixa;
            }
        }
    }
}

function procurePelaChaveRecursivo(caixaPrincipal) {
    for (var i = 0; i < caixaPrincipal.length; i++) {
        if (Array.isArray(caixaPrincipal[i].caixa)) {
            console.log('Olha dentro da caixa', caixaPrincipal[i].caixa);
            var resultado = procurePelaChaveRecursivo(caixaPrincipal[i].caixa);
            if (resultado) {
                return resultado;
            }
        } else {
            if (caixaPrincipal[i].caixa === 'chave') {
                console.log('Encontrada a chave', caixaPrincipal[i].caixa);
                return caixaPrincipal[i].caixa;
            }
        }
    }
}

// console.log(procurePelaChaveRecursivo(
// [
//    { caixa: [{ caixa: [{ caixa: 'chave' }] }] },
//    { caixa: [{ caixa: [] }] },
//    { caixa: [{ caixa: [] }] }
// ]
// ));

function regressiva(i) {
    console.log('i', i);
    return regressiva(i - 1);
}
//sconsole.log(regressiva(10)); // Cuidado com a recursão infinita, isso vai travar o navegador!

function regressivaComCondicao(i) {
    if (i <= 0) {
        return 'Fim da recursão';
    }
    console.log('i', i);
    return regressivaComCondicao(i - 1);
}
//console.log(regressivaComCondicao(100)); // Fim da recursão
