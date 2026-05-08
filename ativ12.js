const prompt = require('prompt-sync')();


let consumos = [];
let soma = 0;

for (let i = 0; i < 6; i++) {
    let litros = Number(prompt(`Dia ${i + 1} (litros): `));
    consumos.push(litros);
    soma += litros;
}

let media = soma / consumos.length;

let pico    = consumos[0];
let diaPico = 1;

for (let i = 1; i < consumos.length; i++) {
    if (consumos[i] > pico) {
        pico    = consumos[i];
        diaPico = i + 1;
    }
}

console.log("Total:", soma, "litros");
console.log("Média diária:", media);
console.log(`Maior pico: ${pico}L no dia ${diaPico}`);
