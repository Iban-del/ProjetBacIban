//création des page

//constante avec les couleur des composant 

//constante avec les couleur des composant 
const color ={
    interactiveComponents1:"#F3EFF7",
    interactiveComponents2:"#ECE5F4",
    interactiveComponents3:"#E5DCF0",
    bordersAndSeparators1:"#DED2EA",
    bordersAndSeparators2:"#D2C4E2",
    bordersAndSeparators3:"#C0AED5",
    solidColors1:"#9980B3",
    solidColors2:"#8D74A6",
    accessibleText1:"#6F5A84",
    accessibleText2:"#2A1E36",
};

const speedAnimation = 1000;

//constante contenant les boutton de la navBar
const NavBarButton = [
    {
        name:"Acceuil",
        id:"home",
        onclick:()=>{
            ManageHomePage(1)
        }
    },
    {
        name:"Cv",
        id:"cv",
        onclick:()=>{
            ManageHomePage(0)
        }
    },
    {
        name:"Lettre de motivation",
        id:"cl",
        onclick:()=>{
            ManageHomePage(0)
        }
    },
    {
        name:"Vidéo",
        id:"video",
        onclick:()=>{
            ManageHomePage(0)
        }
    },
]



/**
 * cette fonction permet d'afficher un contenue d'érreur
 */
function displayError(){

}

/**
 * cette fonction permet 
 */
function drawNavBarButton(){

    const navBar = document.querySelector('#navBar');

    if(navBar instanceof HTMLElement && NavBarButton){
        NavBarButton.forEach((element) => {
            const button = document.createElement("button");
            button.id = element.id;
            button.className = "button-navBar";
            button.textContent = element.name;
            button.addEventListener("click", () => {
                element.onclick();
            });
            navBar.appendChild(button);
        });
    }
}


/**
 * cette fonction gère les annimation de la page de garde
 * type = 1 => afficher
 * type = 0 => cacher
 */
function ManageHomePage(type = 1){

    //récupération de tous les composant
    const panel = document.querySelector('#home');
    const contentL = document.querySelector('#content-left');
    const contentR = document.querySelector('#content-right');
    const Presentation = document.querySelector('#presentation');
    const name = document.querySelector('#name'); 
    const image = document.querySelector('#image'); 

    if(type === 1){

        name.animate([

            { transform: "translateX(-50%) rotate(20deg)",'opacity':0},
            { transform: "translateX(0%) rotate(0deg)",'opacity':1},
        ],
        {
            duration:speedAnimation,
            fill: 'forwards'
        })

        image.animate([

            { transform: "translateX(100%)",'opacity':0},
            { transform: "translateX(0%)",'opacity':1},
            
    
        ],
        {
            duration:speedAnimation,
            fill: 'forwards'
        })

        Presentation.animate([

            { transform: "translateX(-100%)",'opacity':0},
            { transform: "translateX(0%)",'opacity':1},
            
    
        ],
        {
            duration:speedAnimation,
            fill: 'forwards'
        }).addEventListener('finish', () => {
            if(panel instanceof HTMLElement){
                panel.style.visibility = 'hidden'
            }
        });

    }else if(type === 0){
        name.animate([

            { transform: "translateX(0%)",'opacity':1},
            { transform: "translateX(-100%)",'opacity':0},
    
        ],
        {
            duration:speedAnimation,
            fill: 'forwards'
        })

        image.animate([

            { transform: "translateX(0%)",'opacity':1},
            { transform: "translateX(100%)",'opacity':0},
            
    
        ],
        {
            duration:speedAnimation,
            fill: 'forwards'
        })

        Presentation.animate([

            { transform: "translateX(0%)",'opacity':1},
            { transform: "translateX(-100%)",'opacity':0},
            
    
        ],
        {
            duration:speedAnimation,
            fill: 'forwards'
        })
    }
    

}

/**
 * cette fonction permet d'initialiser le site
 */
function init(){

    drawNavBarButton()
    ManageHomePage()
}


//lancement du script


    init()


