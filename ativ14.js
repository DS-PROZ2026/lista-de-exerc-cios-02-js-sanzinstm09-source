const prompt = require('prompt-sync')();


let consumos = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
    let km = Number(prompt(`Caminhão ${i + 1} (km/l): `));
    consumos.push(km);
    soma += km;
}

let media = soma / consumos.length;

let melhor = consumos[0];
let pior   = consumos[0];

for (let i = 1; i < consumos.length; i++) {
    if (consumos[i] > melhor) melhor = consumos[i];
    if (consumos[i] < pior)   pior   = consumos[i];
}

console.log("Média da frota:", media);
console.log("Melhor consumo:", melhor, "km/l");
console.log("Pior consumo:",   pior,   "km/l");
