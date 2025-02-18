//création des page

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