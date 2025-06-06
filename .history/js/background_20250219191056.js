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
function drawVague(ctx, canvas, A, steep) {
    if (!(ctx instanceof CanvasRenderingContext2D)) {
        console.error("Le contexte fourni n'est pas un CanvasRenderingContext2D.");
        return;
    }

    // Effacer le canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let color = 0;

    // Dessiner la vague
    for (let t = -100; t < window.innerHeight + 100; t += 100) {
        for (let i = 0; i < window.innerWidth; i += 40) {
            let x = i;
            let y = vague(x, A) + t + (x * 0.1); // Calcul de la position y
            ctx.beginPath();
            ctx.fillStyle = `rgb(${color + (i * 0.1)}, ${color * 0.9}, ${color + (i * 0.49)})`;
            ctx.arc(x, y, 6, 0, Math.PI * 2, true);
            ctx.fill();
        }
        color += 30; // Changer la couleur pour la prochaine ligne
    }

    // Mettre à jour l'amplitude pour l'animation
    A += steep;

    // Demander la prochaine frame
    requestAnimationFrame(() => drawVague(ctx, canvas, A, steep));
}


}

/**
 * fonction pour annimer le fond 
 */
function animateBackground(ctx,canvas,A){

    let steep = 1;
    drawVague(ctx,canvas,A)

    if(A > 900){

        steep =1;

    }else if(A < 10){
        steep =-1;
    }

    //requestAnimationFrame(animateBackground(ctx,A+steep));

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
        animateBackground(ctx,canvas,1000)

    }
}

try{

    init()

}catch(error){

    console.log(error)
    defaultBackground()
}
