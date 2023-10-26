function verificaDia(ultimaVisita) {
    let dia = new Date();

    let mesAtual = dia.getMonth();

    let mesUltimaVisita = ultimaVisita.getMonth();

    const diaDoEnvio = 2; //variavel para guarda o dia de segunda

    if (mesAtual === (mesUltimaVisita + 1) % 12) {
        if (diaDoEnvio === dia.getDay()) {
            return true;
        }
    }
    console.log("Data invalida");
    return false;
}

module.exports = { verificaDia: verificaDia };