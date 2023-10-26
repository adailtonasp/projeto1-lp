function tratamentoDeErros(erro) {
	console.error(`${erro.name}: ${erro.message}`);
}

module.exports = {tratamentoDeErros:tratamentoDeErros};
