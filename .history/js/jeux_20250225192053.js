/**
 * fonction d'initialisation du fond
 */
function init(){
    //récupération des élémentcanvas
    const canvas = document.querySelector("canvas");

    if(canvas instanceof HTMLCanvasElement){
        const ctx = canvas.getContext('2d');
        canvasStyle(canvas);
        drawVague(ctx, canvas)
        window.addEventListener('resize',()=>{
            drawVague(ctx, canvas);
        })

    }
}

function initCanvas(){
    
}

try{

    init()



}catch(error){

    console.log(error)
    defaultBackground()
}
