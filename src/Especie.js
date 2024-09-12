class Especie {
    constructor(especie, tam, bioma, dieta, particularidade=()=>true){
        Object.assign(this, {especie, tam, bioma, dieta, particularidade});
    }

    vizinhosCompativeis(recinto){
        /*
         * Esse metódo verifica se o animal vai estar seguro
         * com seus "vizinhos" dentro do recinto recebido.
         */

        const vizinhanca = recinto.animaisExistentes;

        var compatibilidade = true;

        for (var vizinho of vizinhanca){
            if (this.dieta == 'carnivoro' && this.especie != vizinho.animal.especie){
                compatibilidade = false;
                break;
            } else if (vizinho.animal.dieta == 'carnivoro' && this.dieta != 'carnivoro'){
                compatibilidade = false;
                break;
            }
        }

        return compatibilidade;
    }
}

export { Especie as Especie };