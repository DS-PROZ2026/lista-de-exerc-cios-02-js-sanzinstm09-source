console.log("=== GESTÃO DE FROTA ===");

let frota = [
    { modelo: "Volvo FH", km: 12000, revisao: 4 },
    { modelo: "Scania R450", km: 8000, revisao: 7 },
    { modelo: "Mercedes Actros", km: 15000, revisao: 8 }
];

let frotaManutencao = [];

for (let i = 0; i < frota.length; i++) {
    if (frota[i].km > 10000 || frota[i].revisao > 6) {
        frotaManutencao.push(frota[i]);
    }
}

console.log("Veículos que precisam de manutenção:");
console.log(frotaManutencao);
console.log("Total:", frotaManutencao.length);