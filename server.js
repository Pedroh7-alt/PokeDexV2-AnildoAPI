const http = require('http');
const url = require('url');
const buscarPokemon = require('./services/ChamarAPI');

const PORT = 3001;

const servidor = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);

    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    if (parsedUrl.pathname === '/pokemon') {
        const nome = parsedUrl.query.nome;
        const dados = await buscarPokemon(nome);

        if (dados.erro) {
            res.writeHead(404);
        } else {
            res.writeHead(200);
        }

        res.end(JSON.stringify(dados, null, 2));
        return;
    }

    res.writeHead(404);
    res.end(JSON.stringify({ erro: "Rota não encontrada. Use /pokemon?nome=..." }));
});

servidor.listen(PORT, () => {
    console.log(`API REST rodando em http://localhost:${PORT}`);
});