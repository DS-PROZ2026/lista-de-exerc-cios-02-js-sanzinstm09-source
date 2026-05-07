const prompt = require('prompt-sync')();

console.log("=== GESTÃO DE PESSOAL ===");

let pessoas = [];
let somaIdade = 0;

for (let i = 0; i < 5; i++) {
    let nome = prompt("Nome: ");
    let idade = Number(prompt("Idade: "));

    pessoas.push({ nome: nome, idade: idade });
    somaIdade += idade;
}

let media = somaIdade / pessoas.length;

let maisVelho = pessoas[0];

for (let i = 1; i < pessoas.length; i++) {
    if (pessoas[i].idade > maisVelho.idade) {
        maisVelho = pessoas[i];
    }
}

console.log("Média de idade:", media);
console.log("Pessoa mais velha:", maisVelho.nome);