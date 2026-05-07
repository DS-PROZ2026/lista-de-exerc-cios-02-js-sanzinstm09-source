const prompt = require('prompt-sync')();

console.log("=== BUSCA DE USUÁRIO ===");

let nomes = [];
let contador = 0;

while (contador < 5) {
    let nome = prompt("Digite um nome: ");
    nomes.push(nome);
    contador++;
}

let i = 0;
let encontrado = false;

while (i < nomes.length) {
    if (nomes[i] === "Ricardo") {
        console.log("Usuário encontrado");
        encontrado = true;
        break;
    }
    i++;
}

if (!encontrado) {
    console.log("Não cadastrado");
}