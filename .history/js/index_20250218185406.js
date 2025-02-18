//création des page

//constante avec les couleur des composant 
const darkColor ={
    interactiveComponents1:"#231D2B",
    interactiveComponents2:"#2F2539",
    interactiveComponents3:"#2F2539",
    BordersAndSeparators1:"#433750",
    BordersAndSeparators2:"#534562",
    BordersAndSeparators3:"#6F5C82",
};

//constante avec les couleur des composant 
const lightColor ={

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