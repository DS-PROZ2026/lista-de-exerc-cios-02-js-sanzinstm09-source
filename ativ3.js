const prompt = require('prompt-sync')();
let mochila = [];
for (let i = 0; i < 6; i++) {
    let item = prompt("Item encontrado: ");
    if (mochila.length < 4) {
        mochila.push(item);
        console.log("Guardado na mochila.");
    } else {
        let trocar = prompt("Mochila cheia! Jogar fora o primeiro item? (S/N): ");
        if (trocar.toUpperCase() === "S") {
            mochila.shift();
            mochila.push(item);
            console.log("Trocado!");
        } else {
            console.log("Deixou pra lá.");
        }
    }
}
console.log("Mochila final:", mochila);
