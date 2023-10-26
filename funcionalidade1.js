function verificaDia(diaDaSemana, ultimaVisita) {
    let dia = new Date();
    let mesAtual = dia.getMonth();
    let mesUltimaVisita = (ultimaVisita.getMonth()) % 12;

    if (mesAtual === mesUltimaVisita) {
        if (diaDaSemana === dia.getDay()) {
            return (true);
        }
    }

    return (false);
}

module.exports = {verificaDia:verificaDia};

