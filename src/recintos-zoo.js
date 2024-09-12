/*                             *
 *    DESAFIO STARTDB 2024     *
 *                             */      

import { Especie } from "./Especie.js";
import { Recinto } from "./Recinto.js";
import { particularidadeHipopotamo, particularidadeMacaco } from "./particularidades.js";


// Criação dos Animais e Recintos
const animais = {
    LEAO: new Especie('LEAO', 3, ['savana'], 'carnivoro'),
    LEOPARDO: new Especie('LEOPARDO', 2, ['savana'], 'carnivoro'),
    CROCODILO: new Especie('CROCODILO', 3, ['rio'], 'carnivoro'),
    MACACO: new Especie('MACACO', 1, ['savana', 'floresta'], 'onivoro', particularidadeMacaco),
    GAZELA: new Especie('GAZELA', 2, ['savana'], 'herbivoro'),
    HIPOPOTAMO: new Especie('HIPOPOTAMO', 4, ['savana', 'rio'], 'onivoro', particularidadeHipopotamo),
}


const recintosDisponiveis = [
    new Recinto(1, ['savana'], 10, [
        {
            animal: animais.MACACO,
            quantidade: 3,
        }
    ]),
    new Recinto(2, ['floresta'], 5, []),
    new Recinto(3, ['savana', 'rio'], 7, [
        {
            animal: animais.GAZELA,
            quantidade: 1,
        }
    ]),
    new Recinto(4, ['rio'], 8, []),
    new Recinto(5, ['savana'], 9, [
        {
            animal: animais.LEAO,
            quantidade: 1,
        }
    ]),
]


class RecintosZoo {
    // Função `principal do programa
    analisaRecintos(animal, quantidade) {
        
        const animalObj = animais[animal]; // Carrega o objeto do animal informado
        
        if (quantidade <= 0){
            return {
                erro: 'Quantidade inválida'
            }
        } else if (!animalObj){
            return {
                erro: 'Animal inválido'
            }
        }
        

        var resultado = {
            recintosViaveis: []
        };

        // Este FOR passa por todos recintos disponiveis, verificando um por um
        // e verifica se é compativel com o animal informado
        for (let recinto of recintosDisponiveis){
            if (recinto.compatibilidade(animalObj, quantidade) && animalObj.vizinhosCompativeis(recinto)){
                
                var novoEspacoLivre = recinto.simularOcupacao(animalObj, quantidade);

                resultado.recintosViaveis.push(
                `Recinto ${recinto.numero} (espaço livre: ${novoEspacoLivre} total: ${recinto.tamTotal})`
                );
            };
        }

        if (!resultado.recintosViaveis.length){
            return {
                erro: 'Não há recinto viável'
            }
        }
        
        return resultado;
    }

}

export { RecintosZoo as RecintosZoo };
