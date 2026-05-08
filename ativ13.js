const prompt = require('prompt-sync')();


let leituras = [];
let soma = 0;
let alertas = 0;

for (let i = 0; i < 6; i++) {
    let temp = Number(prompt(`Sensor ${i + 1}: `));
    leituras.push(temp);
    soma += temp;

    if (temp > 35) alertas++;
}

let media = soma / leituras.length;

let maior = leituras[0];
for (let i = 1; i < leituras.length; i++) {
    if (leituras[i] > maior) maior = leituras[i];
}

console.log("Média:", media);
console.log("Maior leitura:", maior);
console.log("Sensores em alerta:", alertas);
