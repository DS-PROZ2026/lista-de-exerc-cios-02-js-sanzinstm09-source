let frota = [
    { modelo: "Volvo FH",         km: 12000, revisao: 4 },
    { modelo: "Scania R450",      km: 8000,  revisao: 7 },
    { modelo: "Mercedes Actros",  km: 15000, revisao: 8 }
];

let precisaManutencao = [];

for (let i = 0; i < frota.length; i++) {
    let c = frota[i];
    if (c.km > 10000 || c.revisao > 6) {
        precisaManutencao.push(c);
    }
}

console.log("Para manutenção:");
console.log(precisaManutencao);
console.log("Total:", precisaManutencao.length);
