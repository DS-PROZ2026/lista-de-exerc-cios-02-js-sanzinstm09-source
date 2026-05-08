const prompt = require('prompt-sync')();


let nomes = [];

for (let i = 0; i < 5; i++) {
    let nome = prompt("Nome: ");
    nomes.push(nome);
}

let encontrado = false;
let i = 0;

while (i < nomes.length) {
    if (nomes[i] === "Ricardo") {
        console.log("Usuário encontrado!");
        encontrado = true;
        break;
    }
    i++;
}

if (!encontrado) {
    console.log("Não cadastrado.");
}
