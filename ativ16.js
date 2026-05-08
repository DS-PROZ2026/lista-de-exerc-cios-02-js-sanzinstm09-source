const prompt = require('prompt-sync')();


let equipe    = [];
let somaIdade = 0;

for (let i = 0; i < 5; i++) {
    let nome  = prompt("Nome: ");
    let idade = Number(prompt("Idade: "));

    equipe.push({ nome, idade });
    somaIdade += idade;
}

let media = somaIdade / equipe.length;

let maisVelho = equipe[0];
for (let i = 1; i < equipe.length; i++) {
    if (equipe[i].idade > maisVelho.idade) {
        maisVelho = equipe[i];
    }
}

console.log("Média de idade:", media);
console.log("Mais velho:", maisVelho.nome);
