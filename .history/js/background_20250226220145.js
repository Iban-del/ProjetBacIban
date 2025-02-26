// // /**
// //  * création du fond du site
// //  */


// // //constante avec les couleur des composant 
// const color ={
//     backgrounds1:"#FDFCFE",
//     backgrounds2:"#FAF8FD",
// };

// var A = 100
// var X = 0
// var C = 0
// var h = window


// /**
//  * cette fonction permet d'attribué le style au canvas
//  */
// function canvasStyle(canvas){

//     if(canvas instanceof HTMLCanvasElement){

//         canvas.height = window.innerHeight;
//         canvas.width = window.innerWidth;

//         return;
//     }

//     throw new Error("Canvas n'est pas de type HTMLCanvasElement ");

// }

// /**
//  * fonction de création d'une vague
//  */
// function vague(x,A){

//     const lambda = 0.002;//longueur d'onde
//     const k = lambda*2*Math.PI; //nombre oscilation 
//     const phi = 3;//décalage
//     return A*Math.sin(k*x+phi);
// }


// /**
//  * affichage de la vague
//  * @param CanvasRenderingContext2D  ctx
//  */
// function drawVague(ctx,canvas){

//     if(ctx instanceof CanvasRenderingContext2D){
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         let color =0;
//         for(let t = -200;t < window.innerHeight+200;t+= 100){
//             ctx.beginPath();
//             for(let i = 0 ;i < window.innerWidth;i+=5){
//                 let x = i+C
//                 let y = vague(x,A/2)+(t);
//                 ctx.lineTo(x,y)
//                 ctx.beginPath();
//                 ctx.moveTo(x,y)
//                 const addColor = 80
//                 let globalColor= `rgb(${color+addColor+255},${color+addColor-80},${color+addColor-80})`
//                 ctx.fillStyle=globalColor;
//                 ctx.arc(x,y,70,0,Math.PI*2,true)
//                 ctx.fill();
                
//             }
//             color+=20;
//         }    
//     }


// }



// /**
//  * fonction d'initialisation du fond
//  */
// function initSegond(){
//     //récupération des élémentcanvas
//     const canvas = document.querySelector("canvas");

//     if(canvas instanceof HTMLCanvasElement){
        
//         const ctx = canvas.getContext('2d');

//         canvasStyle(canvas);
//         drawVague(ctx, canvas)
//         window.addEventListener('resize',()=>{
//             drawVague(ctx, canvas);
//         })

//     }
// }




//this file allow created and managed a background

/** 2eme background */

const canvas = document.querySelector("canvas")

if(canvas){

    try{

        let Point = class{

            x = canvas.width/2-15;
            y = canvas.height/2-15;
            vx = 0.5;
            vy = 0.5;
            rad = 2;
            radPong = 10;
            color = "#fff";

            draw() {
                
                ctx.beginPath()
                ctx.fillStyle = this.color;
                ctx.arc(this.x,this.y,this.rad,0,Math.PI*2)
                ctx.fill()
        
            }
        
        }

        //#region Constante

        const ctx = canvas.getContext("2d");

        canvasConfif()

        //const for background
        var numberPoint = parseInt(window.innerWidth/10);
        
        const color = {R:142,G:144,B:191};

        const speed = .5;

        const pointColor = "#fff";

        const pointSize = .007;

        const betweenPoints = 200;

        var points = initialisePoints()

        var pointMouse = initialiseMousePoint()
        

        //#region Function


        /**
         * this function allow initialise the default config for the canvas
         */
        function canvasConfif(){

            const h = window.innerHeight+40;
            const w = window.innerWidth+40;

            canvas.height = h;
            canvas.width = w;
            canvas.className = "background";

        }

    
        function initialiseMousePoint(){

            let point = new Point()
            point.rad =pointSize;
            point.color = pointColor;
            point.x = null;
            point.y = null;
            return point
        }   


        /**
         * this function allow initialise all points
         */
        function initialisePoints(){

            let points = []

            for(let p = 0; p < numberPoint; p++){

                //point on canvas
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;

                //speed direction
                let vx = Math.random() < 0.5 ? speed*Math.random() : -speed*Math.random();
                let vy = Math.random() < 0.5 ? speed*Math.random() : -speed*Math.random();

                let point = new Point();

                point.x = x;
                point.y = y;
                point.vx = vx;
                point.vy = vy;
                point.rad =pointSize;
                point.color = pointColor;

                points.push(point);
            }

            return points

        }

        /**
         * this function allow initilise the listeners
         * 
         */
        async function listeners(){

            window.addEventListener('resize',()=>{

                const h = window.innerHeight;
                const w = window.innerWidth;

                canvas.height = h;
                canvas.width = w;
                numberPoint = parseInt(window.innerWidth/10);
                points = initialisePoints()
            })
    
        }


        /**
         * this function allow move one point
         * 
         */
        async function movePoint(point){

            if (point.y + point.vy >canvas.height -pointSize) {
                point.vy = -point.vy;
        
            }else if (point.y + point.vy < 0 +pointSize){
                point.vy = Math.abs(point.vy);
            }

            if (point.x + point.vx > (canvas.width) -pointSize)  {
                point.vx = -point.vx;

            }else if (point.x + point.vx < 0 +pointSize){
                point.vx = Math.abs(point.vx);
            }

            point.x += point.vx;
            point.y += point.vy;

        }


        /**
         * this function allow get a color according to the % 
         * @param {Number} distance 
         */
        function getColor(distance,t=null){

            let percentage = 100*distance/betweenPoints;

            let A = parseInt(255-(percentage*255/100))/1000;
            let R = parseInt(color.R);
            let G = parseInt(color.G);
            let B = parseInt(color.B);

            return `rgba(${R},${G},${B},${A})`

        }

        /**
         * this function draw the points
         * @param {Array} points 
         * @param {Point} p
         */
        async function drawLine(p,mouse=null){


            points.forEach((p2)=>{

                let dX = p.x - p2.x;
                let dY = p.y - p2.y;

                let diagonalPoint = Math.sqrt((Math.pow(dX,2) + Math.pow(dY,2)));

                if(diagonalPoint <= betweenPoints){
                    ctx.beginPath()
                    ctx.strokeStyle = mouse ?"rgba(59, 59, 78, 0.99)":getColor(diagonalPoint)
                    ctx.moveTo(p2.x,p2.y);
                    ctx.lineTo(p.x,p.y)
                    ctx.stroke()

                }

            })

            
            
        }

        /**
         * this function draw the points
         * @param {Array} points 
         */
        async function drawPoint(){
        
            
            ctx.clearRect(0,0,canvas.width,canvas.height)
            points.forEach((p)=>{
                p.draw()
                movePoint(p)
                drawLine(p)

                if(pointMouse.x && pointMouse.y){
                    pointMouse.draw()
                    drawLine(pointMouse,true)

                }
            })

            window.requestAnimationFrame(()=>drawPoint(points))

        }

        function keyBoardlisterners(){
            document.addEventListener("keypress",(e)=>{
                if(e){
                    const code = e.code;
                    switch(code){
                        case 'Numpad1':
                            numberPoint =10
                            points = initialisePoints()
                            drawPoint()
                            break;
                        case 'Numpad2':
                            numberPoint =100
                            points = initialisePoints()
                            drawPoint()
                            break;
                        case 'Numpad3':
                            numberPoint = parseInt(window.innerWidth/10);
                            points = initialisePoints()
                            drawPoint()
                            break;
                        
                    }
                    
                
                }
                
                
            })
        }

        /**
         * this function allow initialise a background
         */
        function init(){
        
            drawPoint()
            listeners()
            
        }
        
        init()
        keyBoardlisterners()

    }catch(error){
        console.log(error)
    }
    
}


