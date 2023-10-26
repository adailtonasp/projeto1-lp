const janeiro = 0;
const fevereiro = 1;
const março = 2;
const abril = 3;
const maio = 4;
const junho = 5;
const julho = 6;
const agosto = 7;
const setembro = 8;
const outubro = 9;
const novembro = 10;
const dezembro = 11;

const listaDeClientes = [
    {
        nome: "Alice",
        aceitaMsg: true,
        email: "alice@mail.com",
        ultimaVisita: new Date(2023, outubro, 4)
    },
    {
        nome: "Bob",
        aceitaMsg: false,
        email: "bob@mail.com",
        ultimaVisita: new Date(2023, outubro, 15)
    },
    {
        nome: "Charlie",
        aceitaMsg: true,
        email: "charlie@mail.com",
        ultimaVisita: new Date(2023, novembro, 2)
    },
    {
        nome: "David",
        aceitaMsg: true,
        email: "david@mail.com",
        ultimaVisita: new Date(2023, outubro, 12)
    },
    {
        nome: "Eva",
        aceitaMsg: false,
        email: "eva@mail.com",
        ultimaVisita: new Date(2023, novembro, 5)
    }
];

module.exports = listaDeClientes;
