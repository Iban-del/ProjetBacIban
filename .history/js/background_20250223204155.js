//this file allow created and managed a background

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
    

            window.addEventListener("mousemove",(e)=>{
            
                pointMouse.x = e.clientX;
                pointMouse.y = e.clientY;

            })

            window.addEventListener("mouseout",()=>{
                pointMouse.x = null;
                pointMouse.y = null;
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

        /**
         * this function allow initialise a background
         */
        function init(){
        
            drawPoint()
            listeners()
        }
        
        init()

    }catch(error){
        console.log(error)
    }
    
}


