//initialisarion du canvas

var canvas = document.querySelector("#bgCanvas");
var ctx = canvas.getContext("2d"); 

canvas.height = top.innerHeight-25;
canvas.width = top.innerWidth-25;

const ballSize = 1;
const distance = 200;
let number;

number = (canvas.height+canvas.width)/20;


// const ballColor = "rgb(255, 255, 255)";
// const largeColor = {R:27,G:59,B:85};
// const smallColor = {R:168,G:245,B:255};
const ballColor = "#20202000";
const smallColor = {R:255,G:255,B:255,A:255};
const largeColor = {R:255,G:255,B:255,A:0};
const speed = 0.07

/**
 * 
 * Class représentant une boule
 * 
 */
let ball = class{

    x = canvas.width/2-15;
    y = canvas.height/2-15;
    vx = 0.5;
    vy = 0.5;
    rad = ballSize;
    radPong = 10;

    draw(params) {
        
        ctx.beginPath()
        ctx.fillStyle = ballColor;
        ctx.arc(this.x,this.y,this.rad,0,Math.PI*2)
        ctx.fill()

    }

}

function getcolor(distance,diagonalPoint){

    let red = (largeColor.R-smallColor.R);
    let green = (largeColor.G-smallColor.G);
    let blue = (largeColor.B-smallColor.B);
    let transparent = (largeColor.A-smallColor.A);

    let position = (diagonalPoint * 100) / distance;
    let porcentage = position/100;

    let R = parseInt((red*porcentage)+smallColor.R);
    let G = parseInt((green*porcentage)+smallColor.G);
    let B = parseInt((blue*porcentage)+smallColor.B);
    let A = parseInt(((transparent*porcentage)+smallColor.A))/1000;

    return `rgba(${R}, ${G}, ${B},${A})`


}


/**
 * 
 * cette fonction permet de renvoyer une direction pour une boule
 * 
 * @returns float
 */
function direction(){

    let v = Math.random()*(speed-speed) + speed

    return parseInt(Math.random()*2) == 1 ?v :-v;

}


/**
 * 
 * cette fonction permet de crée une a plusieurs boules 
 * 
 * @param {number} number 
 * @returns array 
 */
function getBalls(number){

    let balls = [];

    for(b = 0; b < number ;b++){

        const newBall = new ball()

        newBall.x = parseInt(Math.random() * canvas.width);

        newBall.y =  parseInt(Math.random() * canvas.height);

        newBall.vx = direction();

        newBall.vy= direction();

        balls.push(newBall)

    }

    return balls

}



/**
 * Cette fonction permet de crée l'animation et de l'afficher
 * @param {*} balls 
 */
function draw(balls){


    ctx.clearRect(0,0,canvas.width*2,canvas.height);

    balls.forEach(b => {
        
            b.draw();
            if (b.y + b.vy >canvas.height -ballSize  || b.y + b.vy < 0 +ballSize) {
                b.vy = -b.vy;
        
            }
            if (b.x + b.vx > (canvas.width) -ballSize  || b.x + b.vx < 0 +ballSize)  {
                b.vx = -b.vx;

            }
            
            b.x += b.vx;
            b.y += b.vy;

            

            balls.forEach(b2 => {

                let otherX = b2.x;
                let otherY =  b2.y;
                let dX = otherX - b.x; 
                let dY = otherY - b.y;
            
                let diagonalPoint = Math.sqrt((Math.pow(dX,2) + Math.pow(dY,2)));

                if (diagonalPoint < distance){

                    ctx.beginPath();
                    ctx.strokeStyle = getcolor(distance,diagonalPoint)
                    ctx.moveTo(otherX, otherY);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();

                }

            })
        
    });

    

    

    window.requestAnimationFrame(() => draw(balls));

}

function init(){

    let balls = getBalls(number);

    draw(balls);

}

init();


