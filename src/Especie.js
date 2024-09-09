class Especie {
    constructor(especie, tam, bioma, dieta){
        Object.assign(this, {especie, tam, bioma, dieta});
    }

    vizinhosCompativeis(recinto){
        /*
         * Esse metódo verifica se o animal vai estar seguro
         * com seus "vizinhos" dentro do recinto recebido.
         */

        const vizinhanca = recinto.animaisExistentes;

        var resultado = true;

        for (var vizinho of vizinhanca){
            if (this.dieta == 'carnivoro' && this.especie != vizinho.animal.especie){
                resultado = false;
                break;
            } else if (vizinho.animal.dieta == 'carnivoro' && this.dieta != 'carnivoro'){
                resultado = false;
                break;
            }
        }

        return resultado;
    }
}

export { Especie as Especie };