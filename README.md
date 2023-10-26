## Projeto de Email Marketing da CarStore
Este projeto é uma aplicação em JavaScript que automatiza o processo de envio de emails de marketing para os clientes da CarStore toda segunda-feira. Os emails conterão informações sobre novos veículos, os mais vendidos e ofertas especiais de aquisição. Os clientes são armazenados em uma matriz com endereços de email e uma sinalização indicando se desejam receber comunicações de marketing. O projeto utiliza uma função de envio de email "fake" apenas para fins de demonstração.

### Começando
Para usar esta aplicação, siga as instruções abaixo:

#### Pré-requisitos
Node.js instalado em sua máquina.

#### Instalação
Clone este repositório em sua máquina local.
```bash
git clone git@github.com:adailtonasp/projeto1-lp.git CarStore
```

Navegue até o diretório do projeto.
```bash
cd CarStore
```

Instale as dependências do projeto.
```bash
npm install
```

#### Uso
Para executar a aplicação, abra o arquivo `main.js` e localize a seguinte linha:

```javascript
18: const diaDeEnviarEmails = diasDaSemana["segunda-feira"];
```

Você pode alterar `"segunda-feira"` para qualquer outro dia da semana (por exemplo, `"terça-feira"`, `"quarta-feira"`, etc.) para enviar emails em um dia diferente.

Em seguida, execute a aplicação com o seguinte comando:
```bash
node main.js
```

A aplicação verificará o dia atual e enviará emails de marketing para os clientes que optaram por recebê-los.

#### Estrutura do Projeto
O projeto está organizado nos seguintes arquivos:

`main.js`: O arquivo principal da aplicação responsável por verificar o dia e enviar emails de marketing.

`envia-email.js`: Um módulo para simular a funcionalidade de envio de email, este arquivo não foi escrito pelos alunos.

`clientes.js`: Contém a lista de clientes com endereços de email e preferências de comunicação de marketing.

`funcionalidade1.js`: Verificação do Dia da Semana Atual e o tempo desde a última visita do cliente.

`funcionalidade2.js`: Construção do Corpo do Email.

`funcionalidade3.js`: Envio de Email para Clientes:

`funcionalidade4.js`: Tratamento de Erros ou Sucesso no Envio de Emails:

Integrantes:

[geovana]([link](https://github.com/geovanaw))

[adailton](https://github.com/adailtonasp)

[bruno](https://github.com/BrunoZarth)

[raphael](https://github.com/rapdos-s)

