const http = require('http');

const servidor = http.createServer((requisicao, resposta) => {

    resposta.end('<h1>GABRIEL GAMELEIRA DOS SANTOS! O MAIS BRABO!<h1>');

});

servidor.listen(3000);

