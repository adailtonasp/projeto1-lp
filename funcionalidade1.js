function verificaDia(diaDaSemana, ultimaVisita) {
    let dia = new Date();

    let intervalo1 = new Date(ultimaVisita.setDate(ultimaVisita.getDate() + 30));

    let intervalo2 = new Date(ultimaVisita.setDate(ultimaVisita.getDate() + 30));

    if (dia >= intervalo1 && dia <= intervalo2) {    

        if (diaDaSemana === dia.getDay()) {
            return true;
        }
    }
    return false;
}

module.exports = {verificaDia:verificaDia};

