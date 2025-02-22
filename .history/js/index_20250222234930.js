//création des page
var page = "home";

//constante contenant les boutton de la navBar
const NavBarButton = [
    {
        name:"Acceuil",
        id:"home",
        onclick:()=>{
            loadPage("home")
        }
    },
    {
        name:"Cv",
        id:"cv",
        onclick:()=>{
            loadPage("cv")
        }
    },
    {
        name:"Lettre de motivation",
        id:"cl",
        onclick:()=>{
            loadPage("coveringLetter")
        }
    },
    {
        name:"Vidéo",
        id:"video",
        onclick:()=>{
            loadPage("video")
        }
    },
]


/**
 * cette fonction permet de charger une page
 */
function loadPage(name){
    const baseUrl = "http://127.0.0.1:5500/html/"
    //on charge les diférente page en fonction du nom fourni
    switch(name){
        case "home":
            getPageContent(baseUrl+"home.html")
            break
        case "cv":
            getPageContent(baseUrl+"cv.html")
            break
        case "coveringLetter":
            getPageContent(baseUrl+"coveringLetter.html")
            break
        case "video":
            getPageContent(baseUrl+"video.html")
            break
    }
}

/**
 * cette méthode permet de récupéré le contenu d'une page
 */
function getPageContent(link){
    const panel = document.querySelector("#panel");
    if(panel instanceof HTMLElement){
        const request = new XMLHttpRequest();
        request.addEventListener("load",(response)=>{
            if(response instanceof ProgressEvent){
               const content = response.target.responseText
               if(content){
                    panel.innerHTML = content;
               }else{
                    panel.innerHTML = "";
               }
            } 
        })
        request.open("GET",link)
        request.send()
    }
}

/**
 * cette fonction permet d'afficher les bouttons
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
 * cette fonction permet d'animer les composant de la page pricipale
 */
function animateHome(type = 1){
    const elements = {
        panel:document.querySelector("#content-left"),
        title:document.querySelector("#name"),
        text:document.querySelector("#presentation"),
        image:document.querySelector("#image"),
    }

    elements.forEach(element =>{
        if(!element instanceof HTMLElement){
            throw new Error("Les éléments ne sont pas trouvées");
        }
    })


}

/**
 * cette fonction permet d'animer les composant de la page pricipale
 */
function animateCv(type = 1){
    const image = document.querySelector("");
}

/**
 * cette fonction permet d'animer les composant de la page pricipale
 */
function animateCl(type = 1){
    const image = document.querySelector("");
}

/**
 * cette fonction permet d'animer les composant de la page pricipale
 */
function animateVideo(type = 1){
    const video = document.querySelector("");
}

/**
 * cette fonction permet d'initialiser le site
 */
function init(){

    drawNavBarButton()
    loadPage("home")
    
}


//lancement du script
init()


