const prompt = require('prompt-sync')();

console.log("=== CUSTO DE MANUTENÇÃO ===");

let custos = [];
let soma = 0;

for (let i = 0; i < 4; i++) {
    let valor = Number(prompt(`Custo da manutenção ${i + 1}: `));
    custos.push(valor);
    soma += valor;
}

let media = soma / custos.length;

let maior = custos[0];

for (let i = 1; i < custos.length; i++) {
    if (custos[i] > maior) {
        maior = custos[i];
    }
}

console.log("Custo total:", soma);
console.log("Custo médio:", media);
console.log("Manutenção mais cara:", maior);