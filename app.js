const readline = require('readline');
const buscarPokemon = require("./services/ChamarAPI"); // se linka com a API
const descricaoPokeDex = require("./utilidades/descricao")// se linka com a descricao

const rl = readline.createInterface({ 
    input: process.stdin, // define a entrada de dados //basicamente um scanf
    output: process.stdout // define a saida de dados //basicamente um printf
});

function executarBusca(){  //faz a case 1 se tornar um loop até o usuario voltar ao menu inicial
    rl.question("\n PokéDex: Digite o ID ou nome do pokémon ou digite 0 para voltar ao menu inicial: ", async (nome) => {

        if (nome.trim() === '0'){
            return iniciarMenu()
        }
        
        const sucesso = await buscarPokemon(nome);
        
            executarBusca()
        
     })
    }

function iniciarMenu() { //gerencia o menu principal
    rl.question("----------------------------\n PokéDex: Bem vindo a PokéDex!\n Digite: \n 1- Para buscar Pokémon\n 2- Ver a descrição da PokéDex\n 3- Para sair \n Digite Aqui: " , (opcao)=> {
        switch(opcao){
            case '1':
              executarBusca()
            
            break;

            case '2':
                console.log(descricaoPokeDex);
                iniciarMenu()

            break;

            case "3":
                console.log("----------------------------\nPokéDex: Saindo da busca de pokémons! Até logo!!\n")
                rl.close() //fecha o terminal
            break;

            default: 
            console.log("----------------------------\nPokéDex: Por favor, escolha uma opção valida! \n")
            iniciarMenu()
            break;
        }
    });
}

iniciarMenu()

