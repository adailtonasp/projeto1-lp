const enviarEmail = require('./envia-email');

function enviarEmailsParaClientes(clienteContent) {
    if (!clienteContent.diaDeEnviarEmails) {
        console.log(`Email para ${clienteContent.clienteEmail} não enviado: Dia incorreto.`);
        return (null);
    }
    
    if (!clienteContent.clienteAceitaMsg) {
        console.log(`Email para ${clienteContent.clienteEmail} não enviado: Cliente não aceita receber mensagens.`);
        return (null);
    }

    const status = enviarEmail(clienteContent.clienteEmail, clienteContent.assunto, clienteContent.corpoDoEmail);

    return (status);
}

module.exports = {enviarEmailsParaClientes:enviarEmailsParaClientes};
