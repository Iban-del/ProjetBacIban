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
    home={
        name:"Acceuil",
        onclick:()=>{
            
        }
    },
    cv={
        name:"Cv",
        onclick:()=>{
            
        }
    },
    coveringLetter={
        name:"Lettre de motivation",
        onclick:()=>{
            
        }
    },
    video={
        name:"Vidéo",
        onclick:()=>{
            
        }
    },
]

/**
 * création de la navBar
 */
function navBar(parent){

    if(parent instanceof HTMLElement){

        parent.innerHTML = '';

    }

}

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
        NavBarButton.map(()=>{
            navBar.innerHTML += `<>`;
        });
    }
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