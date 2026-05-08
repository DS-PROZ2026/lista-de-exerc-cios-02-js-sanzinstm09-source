const prompt = require('prompt-sync')();
let modelos = ["Duster", "Creta", "Nivus", "Pulse", "Compass"];
let precos  = [110000, 135000, 128000, 105000, 180000];
let orcamento = Number(prompt("Qual seu orçamento? R$ "));
let achouAlgo = false;
for (let i = 0; i < modelos.length; i++) {
    if (precos[i] <= orcamento) {
        console.log(`${modelos[i]} cabe no bolso: R$ ${precos[i]}`);
        achouAlgo = true;
    }
}
if (!achouAlgo) {
    console.log("Nenhum modelo nesse orçamento. Que tal dar uma olhada nos seminovos?");
}
