let vendedores = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];
let vendas     = [5000, 7000, 3000, 9000, 4000];

let soma = 0;
for (let i = 0; i < vendas.length; i++) soma += vendas[i];

let media = soma / vendas.length;

let melhorVenda = vendas[0];
let destaque    = vendedores[0];

for (let i = 1; i < vendas.length; i++) {
    if (vendas[i] > melhorVenda) {
        melhorVenda = vendas[i];
        destaque    = vendedores[i];
    }
}

console.log("Média:", media);
console.log("Destaque do mês:", destaque);

// quem ficou muito abaixo da média
for (let i = 0; i < vendas.length; i++) {
    if (vendas[i] < media * 0.7) {
        console.log(`${vendedores[i]} ficou abaixo da meta.`);
    }
}
