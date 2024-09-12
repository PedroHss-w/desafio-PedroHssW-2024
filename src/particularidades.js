export function particularidadeMacaco(recinto, quantidade){   
    if (quantidade > 1 || recinto.animaisExistentes.length > 0){       
        return true;
    } else {
        return false;
    }
}

export function particularidadeHipopotamo(recinto){
    
    if (recinto.animaisExistentes.length > 0){
       if (recinto.bioma.includes('savana') && recinto.bioma.includes('rio')){
            return true
       } else {
            return false
       }
    }

    return true;
}