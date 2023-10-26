function montarCorpoDoEmail(nomeDoCliente) {
    const cliente = nomeDoCliente || "Cliente";

    let corpoDoEmail =
    `Bom dia ${cliente}

    Como vai? Estamos entrando em contato para infomar as ultimas novidades automotivas na nossa loja!
    Confira agora e não perca oportunidade!

    Carro1 no valor de 40.000R$
    Entrada de 3.000R$
    + 32 parcelas de 1200R$

    Passe em uma de nossas lojas para saber mais condicões imperdiveis.
    Aproveite!

    Atenciosamente,

    Equipe de comunicação CarStore`;

    return (corpoDoEmail);
}

module.exports = {montarCorpoDoEmail:montarCorpoDoEmail};
