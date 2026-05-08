const prompt = require('prompt-sync')();
const bloqueados = ["Carlos", "Fernanda", "Ricardo"];
let liberados = [];
for (let i = 0; i < 3; i++) {
    let nome = prompt("Nome do visitante: ");
    if (bloqueados.includes(nome)) {
        console.log(`ALERTA: ${nome} está na lista de bloqueados!`);
    } else {
        liberados.push(nome);
        console.log("Pode passar.");
    }
}

console.log("Quem entrou:", liberados);
