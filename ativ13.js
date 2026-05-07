const prompt = require('prompt-sync')();

console.log("=== SENSORES ===");

let temperaturas = [];
let soma = 0;
let acima35 = 0;

for (let i = 0; i < 6; i++) {
    let temp = Number(prompt(`Temperatura do sensor ${i + 1}: `));
    temperaturas.push(temp);
    soma += temp;

    if (temp > 35) {
        acima35++;
    }
}

let media = soma / temperaturas.length;

let maior = temperaturas[0];

for (let i = 1; i < temperaturas.length; i++) {
    if (temperaturas[i] > maior) {
        maior = temperaturas[i];
    }
}

console.log("Média:", media);
console.log("Maior temperatura:", maior);
console.log("Sensores em alerta:", acima35);