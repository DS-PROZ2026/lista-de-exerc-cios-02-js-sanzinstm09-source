const prompt = require('prompt-sync')();

console.log("=== SCANNER DE SEGURANÇA ===");

const listaProibida = ["Carlos", "Fernanda", "Ricardo"];
let visitantesAutorizados = [];

for (let i = 0; i < 3; i++) {
    let nome = prompt("Digite o nome do visitante: ");

    if (listaProibida.includes(nome)) {
        console.log(`ALERTA: Segurança acionada para o visitante ${nome}!`);
    } else {
        visitantesAutorizados.push(nome);
        console.log("Visitante autorizado.");
    }
}

console.log("Visitantes liberados:", visitantesAutorizados);