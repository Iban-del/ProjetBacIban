
/**
 * fonction d'initialisation du fond
 */
function init(){
    //récupération des élémentcanvas
    const canvas = document.querySelector("canvas");

    if(canvas instanceof HTMLCanvasElement){
        
        // window.addEventListener("mousemove",(e)=>{
        //     let canvasMouseY =(e.clientY *100 / canvas.height)/1000
        //     A = Math.PI*2+(canvas.height*canvasMouseY)
        //     let canvasMouseX =(e.clientX *100 / canvas.width)/1000
        //     X = Math.PI*2+(canvas.width*canvasMouseX)*5
        //     canvas.style.background = `rgb(${255-X*.05},${255-X*.06},${255-X*.02})`;
        //     drawVague(ctx, canvas)
            
        // })

        const ctx = canvas.getContext('2d');

        canvasStyle(canvas);
        drawVague(ctx, canvas)
        window.addEventListener('resize',()=>{
            drawVague(ctx, canvas);
        })

    }
}

try{

    init()



}catch(error){

    console.log(error)
    defaultBackground()
}
