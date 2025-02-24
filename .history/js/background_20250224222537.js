/**
 * création du fond du site
 */


//constante avec les couleur des composant 
const color ={
    backgrounds1:"#FDFCFE",
    backgrounds2:"#FAF8FD",
};

var A = 100
var X = 0
var C = 0
var h = window
/**
 * fonction qui permet de géré le fond par default en cas d'érreur
 */
function defaultBackground(){
    
    const body = document.querySelector("body");

    if(body instanceof HTMLBodyElement){
        body.style.backgroundColor = color.backgrounds2;
    }

}


/**
 * cette fonction permet d'attribué le style au canvas
 */
function canvasStyle(canvas){

    if(canvas instanceof HTMLCanvasElement){

        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        canvas.style.background =`rgba(149, 223, 198, 0.48)`;

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

function drawVague(ctx, canvas) {
    if (!(ctx instanceof CanvasRenderingContext2D)) return;

    // Définition d'un fond sombre
    ctx.fillStyle = "#0A0A0A"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let color = 50; // Couleur de base pour l'effet dégradé violet
    const A = 50; // Amplitude de la vague (ajuster selon le besoin)
    const C = 30; // Facteur de déplacement horizontal (ajuster selon le besoin)

    function vague(x, amplitude) {
        return amplitude * Math.sin(x * 0.02); // Fonction de vague
    }

    for (let t = -200; t < canvas.height + 200; t += 100) {
        ctx.beginPath();
        for (let i = 0; i < canvas.width; i += 5) {
            let x = i + C;
            let y = vague(x, A / 2) + t;

            ctx.lineTo(x, y);

            ctx.fillStyle = `rgb(${color}, 0, ${color + 100})`; // Teinte violette
            ctx.beginPath();
            ctx.arc(x, y, 40, 0, Math.PI * 2, true); // Réduction de la taille des cercles
            ctx.fill();
        }
        color += 20; // Augmente l'intensité du violet à chaque ligne
    }
}




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
