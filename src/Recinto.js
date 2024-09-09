class Recinto {
    constructor(numero, bioma, tamTotal, animaisExistentes){
        // A classe recinto recebe os valores acima e automaticamente
        // os coloca como propriedade da classe, ela também calcula
        // o espaço ocupado pelos animais que já estão neste recinto
        // e o espaço livre também automaticamente 

        Object.assign(this, {numero, bioma, tamTotal, animaisExistentes});

        var espacoOcupado = 0;
        for (let especie of animaisExistentes){
            espacoOcupado += especie.animal.tam * especie.quantidade;
        }

        this.espacoOcupado = espacoOcupado;
        this.espacoLivre = tamTotal - espacoOcupado;
    }

    compatibilidade(animal, quantidade){
        /* Esse metódo verifica se o animal a ser inserido é 
         * compatível com o Recinto e os seus nobos"vizinhos"
         * que já estão nele
         */

        if (animal.especie == 'MACACO' && quantidade <= 1){
            if (this.animaisExistentes.length <= 0){
                return false;
            }
        }

        const espacoParaOcupar = animal.tam * quantidade;

        if (espacoParaOcupar > this.espacoLivre){
            return false;
        }

        const biomasAnimal = animal.bioma;


        for (var biomaAnimal of biomasAnimal){
            for (var biomaRecinto of this.bioma){
                if (biomaAnimal == biomaRecinto){
                    return true; 
                    /* Se chegou aqui então o animal novo tem um bioma
                     * em comum com o recinto
                    */
                }
            }
        }

        return false;
    }

    simularOcupacao(animal, quantidade){
        /*
         * Esse metódo "simula" a entrada do novo animal
         * no recinto, gerando um novo espaço livre baseado em
         * quanto espaço o novos animais vão ocupar nele.
        */
       
        var novoEspacoLivre = this.espacoLivre - (animal.tam * quantidade);

        animal.quantidade = quantidade;

        var especieNova = false;
        
        this.animaisExistentes.map(bixo => {
            if (animal.especie != bixo.animal.especie){
                especieNova = true;
            } 
        })

        if (this.animaisExistentes.length > 1 || especieNova){   
            novoEspacoLivre -= 1;
        }

        return novoEspacoLivre;
    }
}

export { Recinto as Recinto };