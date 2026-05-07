const prompt = require('prompt-sync')();

console.log("=== CONSULTOR DE SUV ===");

let modelos = ["Duster", "Creta", "Nivus", "Pulse", "Compass"];
let precos = [110000, 135000, 128000, 105000, 180000];

let orcamento = Number(prompt("Digite seu orçamento máximo: "));
let encontrou = false;

for (let i = 0; i < modelos.length; i++) {
    if (precos[i] <= orcamento) {
        console.log(`Você pode comprar o modelo ${modelos[i]} por R$ ${precos[i]}`);
        encontrou = true;
    }
}

if (!encontrou) {
    console.log("Que tal olhar nossa seção de seminovos?");
}