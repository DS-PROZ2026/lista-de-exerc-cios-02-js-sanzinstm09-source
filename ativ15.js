const prompt = require('prompt-sync')();


let custos = [];
let soma = 0;

for (let i = 0; i < 4; i++) {
    let valor = Number(prompt(`Manutenção ${i + 1}: R$ `));
    custos.push(valor);
    soma += valor;
}

let media = soma / custos.length;

let maior = custos[0];
for (let i = 1; i < custos.length; i++) {
    if (custos[i] > maior) maior = custos[i];
}

console.log("Total gasto:", soma);
console.log("Média por manutenção:", media);
console.log("A mais cara foi: R$", maior);
