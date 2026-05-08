const prompt = require('prompt-sync')();
let atletas = [];
for (let i = 0; i < 5; i++) {
    let nome = prompt(`Atleta ${i + 1}: `);
    atletas.push(nome);
}

for (let i = 0; i < atletas.length; i++) {
    if (i === 0) {
        console.log(`${atletas[i]} - Ouro `);
    } else if (i === 1) {
        console.log(`${atletas[i]} - Prata `);
    } else if (i === 2) {
        console.log(`${atletas[i]} - Bronze `);
    } else {
        console.log(`${atletas[i]} - Medalha de honra`);
    }
}
