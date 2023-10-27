function montarCorpoDoEmail(nomeDoCliente) {
    const cliente = nomeDoCliente || "Cliente";

    let corpoDoEmail =
    `Bom dia ${cliente}

    Como vai? Estamos entrando em contato para infomar as ultimas novidades automotivas na nossa loja!
    Confira agora nossa promoção!

     - Carro sedan no valor de 40.000R$
    Entrada de 3.000R$
    + 32 parcelas de 1200R$

     - Carro hatch no valor de 38.000R$
    Entrada de 2500R$
    + 28 parcelas de 1300R$

    Adquirindo qualquer unidade na nossa loja você recebe de brinde o valor de entrada em crédito no iFood!
    
    Não perca esta oportunidade única de economizar em sua próxima compra de carro e ainda ganhar crédito no iFood para aproveitar as deliciosas opções gastronômicas disponíveis na plataforma!

    Passe em uma de nossas lojas para saber mais condicões imperdiveis.
    Aproveite!

    Atenciosamente,

    Equipe de comunicação CarStore`;

    return (corpoDoEmail);
}

module.exports = {montarCorpoDoEmail:montarCorpoDoEmail};
