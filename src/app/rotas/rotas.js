module.exports = (app) => {

    app.get('/', (requisicao, resposta) => {

        resposta.send(

            '<h1>Oi!</h1>'

        );

    });

    app.get('/livros', (requisicao, resposta) => {

        resposta.send(

            '<h1>Listagem de Livros!</h1>'

        );

    });
}