const http = require('http');

const servidor = http.createServer((requisicao, resposta) => {

    let html = '';

    if (requisicao.url == '/') {

        html = '<h1>GABRIEL GAMELEIRA DOS SANTOS! O MAIS BRABO!<h1>';

    } else if (requisicao.url == '/livros') {

        html = '<h1> GAMESGAMES! O MAIS BRABO!<h1>';

    }

    resposta.end(html);

});

servidor.listen(3000);

