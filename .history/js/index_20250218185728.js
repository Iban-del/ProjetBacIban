//création des page

//constante avec les couleur des composant 
const darkColor ={
    interactiveComponents1:"#231D2B",
    interactiveComponents2:"#2F2539",
    interactiveComponents3:"#2F2539",
    bordersAndSeparators1:"#433750",
    bordersAndSeparators2:"#534562",
    bordersAndSeparators3:"#6F5C82",
    solidColors1:"#9980B3",
    solidColors2:"#8D74A6",
    accessibleText1:"#C1ABD9",
    accessibleText2:"#EDE7F5",
};

//constante avec les couleur des composant 
const lightColor ={
    interactiveComponents1:"",
    interactiveComponents2:"",
    interactiveComponents3:"",
    bordersAndSeparators1:"",
    bordersAndSeparators2:"",
    bordersAndSeparators3:"",
    solidColors1:"",
    solidColors2:"",
    accessibleText1:"",
    accessibleText2:"",
};

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
 * cette fonction permet d'initialiser le site
 */
function init(){

}


//lancement du script
try{

    init()

}catch(error){
    displayError();
}