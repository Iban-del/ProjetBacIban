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
const panel = document.querySelector("#panel");
const speedAnimation = 1000;

//constante contenant les boutton de la navBar
const NavBarButton = [
    {
        name:"Acceuil",
        id:"home",
        onclick:()=>{
           
        }
    },
    {
        name:"Cv",
        id:"cv",
        onclick:()=>{
           
        }
    },
    {
        name:"Lettre de motivation",
        id:"cl",
        onclick:()=>{
           
        }
    },
    {
        name:"Vidéo",
        id:"video",
        onclick:()=>{
           
        }
    },
]



/**
 * cette fonction détruit le conenu 
 */
function destroyChild(){
    while (panel.firstChild) {
        panel.removeChild(div.firstChild);
    }
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
 * cette foncyion permet de géré la page pricipale
 */
function manageHomePage(){

    

}





/**
 * cette fonction permet d'initialiser le site
 */
function init(){
    if(panel instanceof HTMLElement){
        drawNavBarButton()
        manageHomePage()
    } 
}


//lancement du script
init()


