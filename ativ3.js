const prompt = require('prompt-sync')();

console.log("=== INVENTÁRIO DE SOBREVIVÊNCIA ===");

let mochila = [];

for (let i = 0; i < 6; i++) {
    let item = prompt("Encontrou um item: ");

    if (mochila.length < 4) {
        mochila.push(item);
        console.log("Item adicionado.");
    } else {
        let resposta = prompt("Mochila cheia! Deseja descartar o primeiro item para pegar o novo? (S/N): ");

        if (resposta.toUpperCase() === "S") {
            mochila.shift();
            mochila.push(item);
            console.log("Item trocado com sucesso.");
        } else {
            console.log("Item ignorado.");
        }
    }
}

console.log("Conteúdo final da mochila:", mochila);