# api-listar-dados

Api para listar as proposições contidas em arquivo .json, por meio das routes, é possivel obter:

/ => Todas as proposições

/nomedoautor => lista todas as proposições de acordo com o nomedoautor passado na url

/propositions/tipo => lista todas as proposições de acordo com o tipo passado na url

Para testar a api, primeiramente instale os pacotes necessários com o comando: npm install

Em seguida, use o comando "npm start" para iniciar o server

Caso queria alterar a porta, altere o primeiro parametro na funcao app.listen() no arquivo server.js
