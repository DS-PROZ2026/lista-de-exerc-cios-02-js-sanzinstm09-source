const prompt = require('prompt-sync')();

console.log("=== ORGANIZADOR DE PÓDIO ===");

let atletas = [];

for (let i = 0; i < 5; i++) {
    let nome = prompt(`Digite o nome do atleta ${i + 1}: `);
    atletas.push(nome);
}

for (let i = 0; i < atletas.length; i++) {
    if (i === 0) {
        console.log(`${atletas[i]} ganhou Ouro 🥇`);
    } else if (i === 1) {
        console.log(`${atletas[i]} ganhou Prata 🥈`);
    } else if (i === 2) {
        console.log(`${atletas[i]} ganhou Bronze 🥉`);
    } else {
        console.log(`Participante ${atletas[i]} recebeu medalha de honra.`);
    }
}