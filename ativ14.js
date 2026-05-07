const prompt = require('prompt-sync')();

console.log("=== CONSUMO DOS CAMINHÕES ===");

let consumos = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
    let kmPorLitro = Number(prompt(`Consumo do caminhão ${i + 1} (km/l): `));
    consumos.push(kmPorLitro);
    soma += kmPorLitro;
}

let media = soma / consumos.length;

let maior = consumos[0];
let menor = consumos[0];

for (let i = 1; i < consumos.length; i++) {
    if (consumos[i] > maior) {
        maior = consumos[i];
    }
    if (consumos[i] < menor) {
        menor = consumos[i];
    }
}

console.log("Média da frota:", media);
console.log("Melhor consumo:", maior);
console.log("Pior consumo:", menor);