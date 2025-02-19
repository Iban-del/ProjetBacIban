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

var A = 100
var X = 0

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
        canvas.style.background = "radial-gradient("+darkColor.backgrounds2+","+darkColor.backgrounds1+")";

        return;
    }

    throw new Error("Canvas n'est pas de type HTMLCanvasElement ");

}

/**
 * fonction de création d'une vague
 */
function vague(x,A){

    const lambda = 0.002;//longueur d'onde
    const k = lambda*2*Math.PI; //nombre oscilation 
    const phi = 3;//décalage
    return A*Math.sin(k*x+phi);
}


/**
 * affichage de la vague
 * @param CanvasRenderingContext2D  ctx
 */
function drawVague(ctx,canvas){

    if(ctx instanceof CanvasRenderingContext2D){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let color =0;
        for(let t = -200;t < window.innerHeight+200;t+= 100){
            ctx.beginPath();
            for(let i = 0 ;i < window.innerWidth;i+=5){
                let x = i+X
                let y = vague(x,A)+(t);
                ctx.lineTo(x,y)
                ctx.beginPath();
                ctx.moveTo(x,y)
                ctx.fillStyle=`rgb(${color},${color+50},${color+50})`;
                ctx.arc(x,y,70,0,Math.PI*2,true)
                ctx.fill();
                
            }
            color+=20;
        }
        // if(A >100){
        //     steep +=-Math.PI/2;
        // }else if(A < 10){
        //     steep += Math.PI/2;
        // }
        // A+= steep;
        // Demander la prochaine frame
        // requestAnimationFrame(() => drawVague(ctx, canvas, A, steep));
        
    }


}

/**
 * fonction pour annimer le fond 
 */
function animateBackground(ctx,canvas){

    

    let steep = 1;
    drawVague(ctx,canvas,steep)

    
    
    //requestAnimationFrame(animateBackground(ctx,A+steep));

}


/**
 * fonction d'initialisation du fond
 */
function init(){
    //récupération des élémentcanvas
    const canvas = document.querySelector("canvas");

    if(canvas instanceof HTMLCanvasElement){
        
        canvas.addEventListener("mousemove",(e)=>{
            let canvasMouseY =(e.clientY *100 / canvas.height)/1000
            A = Math.PI*2+(canvas.height*canvasMouseY)
            let canvasMouseX =(e.clientX *100 / canvas.width)/1000
            X = e.clientX/2
            drawVague(ctx, canvas)
            
        })

        const ctx = canvas.getContext('2d');

        canvasStyle(canvas);
        animateBackground(ctx,canvas)

    }
}

try{

    init()

}catch(error){

    console.log(error)
    defaultBackground()
}
