/**
 * création du fond du site
 */


/**
 * fonction qui permet de géré le fond par default en cas d'érreur
 */
function defaultBackground(){
    
    const body = document.querySelector("body");

    if(body instanceof HTMLBodyElement){
        body.style.backgroundColor = "#988395";
    }

}


/**
 * cette fonction permet d'attribué le style au canvas
 */
function canvasStyle(){

}

/**
 * fonction d'initialisation du fond
 */
function init(){
    //récupération des élémentcanvas
    const canvas = document.querySelector("canvas");

    if(canvas instanceof HTMLCanvasElement){

        const ctx = canvas.getContext('2d');

    }
}

try{

    init()

}catch(error){
    defaultBackground()
}
