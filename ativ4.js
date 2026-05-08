const prompt = require('prompt-sync')();

let temps = [];
let soma = 0;
for (let i = 0; i < 7; i++) {
    let t = Number(prompt(`Temperatura do dia ${i + 1}: `));
    temps.push(t);
    soma += t;
}
let media = soma / temps.length;
let maior = temps[0];
let menor = temps[0];
for (let i = 1; i < temps.length; i++) {
    if (temps[i] > maior) maior = temps[i];
    if (temps[i] < menor) menor = temps[i];
}
console.log("Média da semana:", media.toFixed(2));
console.log("Mais quente:", maior);
console.log("Mais frio:", menor);
