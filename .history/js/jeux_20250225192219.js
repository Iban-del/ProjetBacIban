

/**
 * cette fonction permet d'initialiser le canvas
 */
function initCanvas(canvas){
    if(canvas instanceof HTMLCanvasElement){

        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        canvas.style.background =`rgba(149, 223, 198, 0.48)`;

        return;
    }
}


/**
 * fonction d'initialisation du fond
 */
function init(){
    //récupération des élémentcanvas
    const canvas = document.querySelector("canvas");

    if(canvas instanceof HTMLCanvasElement){
        const ctx = canvas.getContext('2d');
        initCanvas(canvas)
    }
}

try{

    init()



}catch(error){

    console.log(error)
}
