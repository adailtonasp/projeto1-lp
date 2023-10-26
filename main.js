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

const diaDeEnviarEmails = diasDaSemana["quinta-feira"]; //mudar pra segunda

const assunto = "Novidades CarStore";

function enviarEmailsParaCliente(cliente) {
    try {
        // Funcionalidade 1
        const diaValidoParaEnvio = verificaDia(diaDeEnviarEmails, cliente.ultimaVisita);

        if (!diaValidoParaEnvio) {
            console.log("Não foi gerado email");
            return;
        } 
        
        // Funcionalidade 2
        const corpoDoEmail = montarCorpoDoEmail(cliente.nome);

        // Funcionalidade 3

        const emailContent = {
            "clienteEmail" : cliente.email,
            "assunto" : assunto,
            "corpoDoEmail" : corpoDoEmail,
            "diaDeEnviarEmails" : diaValidoParaEnvio,
            "clienteAceitaMsg" : cliente.aceitaMsg
        }

        const status = enviarEmailsParaClientes(emailContent);

        // Funcionalidade 4
        if (status && status.status !== "Sucess") { //ta escrito errado
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
