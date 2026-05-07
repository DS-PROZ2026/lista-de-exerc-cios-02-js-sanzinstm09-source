const prompt = require('prompt-sync')();

console.log("=== ANALISADOR DE CLIMA ===");

let temperaturas = [];
let soma = 0;

for (let i = 0; i < 7; i++) {
    let temp = Number(prompt(`Digite a temperatura do dia ${i + 1}: `));
    temperaturas.push(temp);
    soma += temp;
}

let media = soma / temperaturas.length;

let maior = temperaturas[0];
let menor = temperaturas[0];

for (let i = 1; i < temperaturas.length; i++) {
    if (temperaturas[i] > maior) {
        maior = temperaturas[i];
    }

    if (temperaturas[i] < menor) {
        menor = temperaturas[i];
    }
}

console.log("Média:", media.toFixed(2));
console.log("Maior temperatura:", maior);
console.log("Menor temperatura:", menor);