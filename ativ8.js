console.log("ANALISADOR DE VENDAS");

let nomesVendedores = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];
let totalVendas = [5000, 7000, 3000, 9000, 4000];

let soma = 0;

for (let i = 0; i < totalVendas.length; i++) {
    soma += totalVendas[i];
}

let media = soma / totalVendas.length;

let maiorVenda = totalVendas[0];
let vendedorDestaque = nomesVendedores[0];

for (let i = 1; i < totalVendas.length; i++) {
    if (totalVendas[i] > maiorVenda) {
        maiorVenda = totalVendas[i];
        vendedorDestaque = nomesVendedores[i];
    }
}

console.log("Média de vendas:", media);
console.log("Vendedor destaque:", vendedorDestaque);

for (let i = 0; i < totalVendas.length; i++) {
    if (totalVendas[i] < media * 0.7) {
        console.log(`${nomesVendedores[i]} está abaixo da meta.`);
    }
}