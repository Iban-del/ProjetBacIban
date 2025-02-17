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
function canvasStyle(canvas){

    if(canvas instanceof HTMLCanvasElement){

        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;

        return;
    }

    throw new Error("Canvas n'est pas de type HTMLCanvasElement ");

}




/**
 * fonction d'initialisation du fond
 */
function init(){
    //récupération des élémentcanvas
    const canvas = document.querySelector("canvas");

    if(canvas instanceof HTMLCanvasElement){

        const ctx = canvas.getContext('2d');

        canvasStyle(canvas);


    }
}

try{

    init()

}catch(error){

    console.log(error)
    defaultBackground()
}
