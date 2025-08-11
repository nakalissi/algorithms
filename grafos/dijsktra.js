var processados = [];

function dikstra() {
    var nodeCustoMaisBaixo = custoMaisBaixo(custos);
    console.log("Custo mais baixo:", nodeCustoMaisBaixo);

    // enquanto houver grafos a serem processados
    for (let grafo in grafos) {
        // pegue o vértice que está mais próximos do início
        var custo = custos[nodeCustoMaisBaixo];
        var vizinhos = grafos[nodeCustoMaisBaixo];

        for (let vizinho in vizinhos) {
            console.log(`Custo ${custo}: Vizinho ${vizinhos[vizinho]}`);
            
            var novoCusto = custo + vizinhos[vizinho];
            console.log("Novo custo:", novoCusto);
            console.log(`Custo atual do vizinho ${vizinho}:`, custos[vizinho]);
            
            if (custos[vizinho] > novoCusto) {
                // atualize os custos para os seus vizinhos
                custos[vizinho] = novoCusto;
                // se qualquer um dos custos dos vizinhos for atualizado, atualize também o pai
                pais[vizinho] = grafo;
                console.log('Atualizando custo e pai:', pais);
            }
        }
        // marque o vértice como processado
        processados.push(grafo);
    }
    node = custoMaisBaixo(custos);
    console.log("Custo mais baixo após processamento:", node);
    
    // retorne o custo do caminho mais curto
    return custos;
}

function custoMaisBaixo(custos) {
    var custoMaisBaixo = Infinity;
    var aresta = null;
    for (let custo in custos){
        custo = custos[custo];
        if (custo < custoMaisBaixo && !processados.includes(custo)) {
           custoMaisBaixo = custo;
           aresta = custo;
        }
    }
    return aresta;
}

var grafos = {};
grafos['inicio'] = {};
grafos['inicio']['a'] = 6;
grafos['inicio']['b'] = 2;
grafos['a'] = {};
grafos['a']['fim'] = 1;
grafos['b'] = {};
grafos['b']['a'] = 3;
grafos['b']['fim'] = 5;
grafos['fim'] = {};

var custos = {};
custos['a'] = 6;
custos['b'] = 2;
custos['fim'] = Infinity;

var pais = {};
pais['a'] = 'inicio';
pais['b'] = 'inicio';
pais['fim'] = null;

console.log(dikstra());
