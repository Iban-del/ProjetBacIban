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

//constante contenant les boutton de la navBar
const NavBarButton = [
    {
        name:"Acceuil",
        onclick:()=>{
            
        }
    },
    {
        name:"Cv",
        onclick:()=>{
            
        }
    },
    {
        name:"Lettre de motivation",
        onclick:()=>{
            
        }
    },
    {
        name:"Vidéo",
        onclick:()=>{
            
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
        NavBarButton.map((element)=>{
            navBar.innerHTML += `<div> <button onClick="${element.onclick}" class="button-navBar">${element.name}</button></div>`;
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
    const contentR = document.querySelector('#content-right'); 

}

/**
 * cette fonction permet d'initialiser le site
 */
function init(){

    drawNavBarButton()

}


//lancement du script
try{

    init()

}catch(error){
    displayError();
}