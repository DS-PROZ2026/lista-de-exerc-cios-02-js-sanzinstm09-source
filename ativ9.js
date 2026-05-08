let funcionarios = [
    { nome: "João",    salario: 2500 },
    { nome: "Mariana", salario: 3500 },
    { nome: "Pedro",   salario: 4200 },
    { nome: "Lucas",   salario: 2800 }
];

let i = 0;

while (i < funcionarios.length) {
    if (funcionarios[i].salario > 3000) {
        console.log(funcionarios[i].nome);
    }
    i++;
}
