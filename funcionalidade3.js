const enviarEmail = require('./envia-email');

function enviarEmailsParaClientes(email, assunto, corpoDoEmail, diaValidoParaEnvio, aceitaMsg) {
    if (!diaValidoParaEnvio) {
        console.log(`Email para ${email} não enviado: Dia incorreto.`);
        return (null);
    }
    
    if (!aceitaMsg) {
        console.log(`Email para ${email} não enviado: Cliente não aceita receber mensagens.`);
        return (null);
    }

    const status = enviarEmail(email, assunto, corpoDoEmail);

    return (status);
}

module.exports = {enviarEmailsParaClientes:enviarEmailsParaClientes};
