/**
 * création du fond du site
 */

//constante avec les couleur des composant 
const darkColor ={
    backgrounds1:"#000",
    backgrounds2:"#141118",
};

//constante avec les couleur des composant 
const lightColor ={
    backgrounds1:"#FDFCFE",
    backgrounds2:"#FAF8FD",
};


/**
 * fonction qui permet de géré le fond par default en cas d'érreur
 */
function defaultBackground(){
    
    const body = document.querySelector("body");

    if(body instanceof HTMLBodyElement){
        body.style.backgroundColor = darkColor.backgrounds2;
    }

}


/**
 * cette fonction permet d'attribué le style au canvas
 */
function canvasStyle(canvas){

    if(canvas instanceof HTMLCanvasElement){

        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        //canvas.style.background = "radial-gradient("+darkColor.backgrounds2+","+darkColor.backgrounds1+")";

        return;
    }

    throw new Error("Canvas n'est pas de type HTMLCanvasElement ");

}

/**
 * fonction de création d'une vague
 */
function vague(x){

    const A = 60;//l'amplitude
    const lambda = 0.01;//longueur d'onde
    const k = lambda*2*Math.PI; //nombre oscilation 
    const phi = 3;//décalage
    return A*Math.sin(k*x+phi);
}


/**
 * affichage de la vague
 * @param CanvasRenderingContext2D  ctx
 */
function drawVague(ctx){

    if(ctx instanceof CanvasRenderingContext2D){

        ctx.beginPath();
        for(let i = 0 ;i < window.innerWidth;i+=10){
        
            let x = i;
            let y = vague(x)+(window.innerHeight/2);
            ctx.lineTo(x,y)
            ctx.moveTo(x,y)
            ctx.strokeStyle="red";
            ctx.arc(x,y,2,0,Math.PI*2,true)
            ctx.stroke();
        }
    
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

        canvasStyle(canvas);
        drawVague(ctx)

    }
}

try{

    init()

}catch(error){

    console.log(error)
    defaultBackground()
}
