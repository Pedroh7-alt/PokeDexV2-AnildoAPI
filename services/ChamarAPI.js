async function buscarPokemon(nome) {
    if(!nome) {
        console.log("\n Pokédex: Por favor digite o ID ou o nome do Pokémon. \n");
        return false;
    }

    try{
        
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
        if (!resposta.ok) {
            console.log("\n Pokédex: Pokémon não encontrado. \n");
            return false;
        }
        
        const dados = await resposta.json();
        
        //busca os tipos do pokemon 
        const tipos = dados.types.map(item => item.type.name).join(", ");
        
        //busca as habilidades do pokemon
        const habilidades = dados.abilities.map(item => item.ability.name).join(", ");
        
        //busca o movimento do pokemon 
        const movimentos = dados.moves.slice(0, 4).map(item => item.move.name).join(", ");
        
        console.log(("ID:"), dados.id);
        console.log(("Nome:"), dados.name);
        console.log(("Tipo(s):"), tipos);
        console.log(("Habilidade(s): "), habilidades);
        console.log(("Movimentos:"), movimentos);
        console.log(("Altura:"), dados.height);
        console.log(("Peso:"), dados.weight);

        return true;

        
    } catch (erro) {
        console.log("Pokédex: Falha ao se comunicar com a API", erro.message);
        return false;
    }
};

module.exports = buscarPokemon;