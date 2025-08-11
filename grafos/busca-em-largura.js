// Verificar se existe vendedor de manga na lista de primeiro grau
// Se não, adiciona na lista de vendedores de 2 grau
// Se encontrar, termina o loop, se não passa para a próxima 
const lista = {};
lista["voce"] = ["alice", "bob", "claire"]
lista["bob"] = ["anuj", "peggy"]
lista["alice"] = ["peggy"]
lista["claire"] = ["thom", "jonny"]
lista["anuj"] = []
lista["peggy"] = []
lista["thom"] = []
lista["jonny"] = []

function pesquisa(nome) {
    const fila = [...lista[nome]];
    const verificada = [];
    while (fila.length){
        const pessoaRemovida = fila.shift();
        console.log("Pessoa verificadas", verificada);
        console.log("Já foi verificada?", verificada.includes(pessoaRemovida));
        
        if (!verificada.includes(pessoaRemovida)) {
            console.log("Adiciona pessoa na lista verificada");
            verificada.push(pessoaRemovida);
            if (ehVendedor(pessoaRemovida)) {
                console.log(`${pessoaRemovida} é um vendedor de manga`);
                return true;
            } else {
                fila.push(...lista[pessoaRemovida]);
                console.log("Adicionado vizinhos", fila);
            }
        }
    }
    console.log("Nenhum vendendor encontrado!");
    return false;
}
function ehVendedor(nome) {
    return nome.charAt(nome.length - 1) === "m";
}
console.time("pesquisa");
console.log(pesquisa("voce"));
console.timeEnd("pesquisa");


class BuscadorDeVendedor {
    constructor(grafo) {
        this.grafo = grafo;
        this.verificados = new Set();
    }

    ehVendedor(nome) {
        return nome.endsWith('m');
    }

    pesquisar(nome) {
        const fila = [...this.grafo[nome]];

        while (fila.length) {
            const pessoa = fila.shift();

            if (this.verificados.has(pessoa)) {
                continue;
            }

            if (this.ehVendedor(pessoa)) {
                console.log(`${pessoa} é um vendedor de manga`);
                return true;
            }

            fila.push(...this.grafo[pessoa]);
            this.verificados.add(pessoa);
        }

        console.log("Nenhum vendedor de manga encontrado.");
        return false;
    }
}

// Exemplo de uso:
const buscador = new BuscadorDeVendedor(lista);
buscador.pesquisar("voce");
