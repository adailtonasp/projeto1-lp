const verificaDia = require('./funcionalidade1').verificaDia;
const montarCorpoDoEmail = require('./funcionalidade2').montarCorpoDoEmail;
const enviarEmailsParaClientes = require('./funcionalidade3').enviarEmailsParaClientes;
const tratamentoDeErros = require('./funcionalidade4').tratamentoDeErros;

const listaDeClientes = require('./clientes');

const diasDaSemana = {
    "domingo": 0,
    "segunda-feira": 1,
    "terça-feira": 2,
    "quarta-feira": 3,
    "quinta-feira": 4,
    "sexta-feira": 5,
    "sábado": 6
};

const diaDeEnviarEmails = diasDaSemana["segunda-feira"];

const assunto = "Novidades CarStore";

function enviarEmailsParaCliente(cliente) {
    try {
        // Funcionalidade 1
        const diaValidoParaEnvio = verificaDia(diaDeEnviarEmails, cliente.ultimaVisita);

        // Funcionalidade 2
        const corpoDoEmail = montarCorpoDoEmail(cliente.nome);

        // Funcionalidade 3
        const status = enviarEmailsParaClientes(cliente.email, assunto, corpoDoEmail, diaValidoParaEnvio, cliente.aceitaMsg);

        // Funcionalidade 4
        if (status && status.status !== "success") {
            throw new Error(status.message);
        }
    }
    catch (error) {
        // Funcionalidade 4
        tratamentoDeErros(error);
    }
}

function main() {
    for (let i = 0; i < listaDeClientes.length; i++) {
        enviarEmailsParaCliente(listaDeClientes[i]);
    }
}

main();
