export function pagination (){
    
    var limSuperior=15, limInferior=0, numPage = 0;

    if(filteredGames !== undefined){
        numPage = Math.ceil(filteredGames.length/15);
    }

    const btnSiguiente  = document.querySelector('.btnSiguiente');
    const btnAnterior   = document.querySelector('.btnAnterior');
    
    if(btnSiguiente !== null &&  btnAnterior !== null)
    {
        if(page < numPage){
            limSuperior = page*15 + 15;
            btnSiguiente.disabled=false;
            if(page+1 === numPage)
                btnSiguiente.disabled=true;
        }else 
            btnSiguiente.disabled=true;

        if(page > 0){
            limInferior = limSuperior - 15;
            btnAnterior.disabled=false;
        }else
            btnAnterior.disabled=true;
    }
    
        // console.log(
        //     "pagina: ", page,
        //     "limSuperior: ", limSuperior, 
        //     "limInferior: ",limInferior);


}