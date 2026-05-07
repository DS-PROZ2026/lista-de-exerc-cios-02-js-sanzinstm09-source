const prompt = require('prompt-sync')();

console.log("=== CONSUMO DE ÁGUA ===");

let consumos = [];
let soma = 0;

for (let i = 0; i < 6; i++) {
    let litros = Number(prompt(`Consumo do dia ${i + 1}: `));
    consumos.push(litros);
    soma += litros;
}

let media = soma / consumos.length;

let maior = consumos[0];
let diaMaior = 1;

for (let i = 1; i < consumos.length; i++) {
    if (consumos[i] > maior) {
        maior = consumos[i];
        diaMaior = i + 1;
    }
}

console.log("Consumo total:", soma);
console.log("Média diária:", media);
console.log(`Maior pico: ${maior} litros no Dia ${diaMaior}`);