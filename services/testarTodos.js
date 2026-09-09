async function testarPokemonsCompostos(limite = 10326) {
    console.log("Buscando Pokémons com nomes compostos (com '-')...\n");
    const listaCompostos = [];

    for (let id = 10000; id <= limite; id++) {
        try {
            const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

            if (!resposta.ok) {
                console.log(`ID ${id}: Não encontrado.`);
                continue;
            }

            const dados = await resposta.json();

            // Filtra apenas os nomes que contêm hífen
            if (dados.name.includes('-')) {
                const pokemon = { id: dados.id, nome: dados.name };
                listaCompostos.push(pokemon);

                console.log(`ID: ${dados.id} | Nome Composto: ${dados.name}`);
            }

        } catch (erro) {
            console.log(`Erro de conexão no ID ${id}:`, erro.message);
        }
    }

    console.log(`\nVarredura finalizada! Total de Pokémons compostos encontrados: ${listaCompostos.length}`);
    return listaCompostos;
}

testarPokemonsCompostos();
