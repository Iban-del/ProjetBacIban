//création des page
var page = "home";
const speedAnimationFast = 300;
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
function loadPage(name,now = false){
    const baseUrl = "http://127.0.0.1:5500/html/"
    //on charge les diférente page en fonction du nom fourni
    switch(name){
        case "home":
            getPageContent(baseUrl+"home.html",animateHome,now)
            
            break
        case "cv":
            getPageContent(baseUrl+"cv.html",animateCv,now)
            break
        case "coveringLetter":
            getPageContent(baseUrl+"coveringLetter.html",animateCl,now)
            break
        case "video":
            getPageContent(baseUrl+"video.html",animateVideo,now)
            break
    }
}

/**
 * cette méthode permet de récupéré le contenu d'une page
 */
async function getPageContent(link,animate = null,now = false){
    const panel = document.querySelector("#panel");
    if(panel instanceof HTMLElement){
        const request = new XMLHttpRequest();
        request.addEventListener("load",(response)=>{
            if(response instanceof ProgressEvent){
                const content = response.target.responseText
                if(content){
                        if(animate){
                            if(now){
                                panel.innerHTML = content;
                                animate(1)
                            }else{
                                hideAnimation(page)
                                setTimeout(()=>{
                                    panel.innerHTML = content;
                                    animate(1)
                                },speedAnimationFast)
                                
                            }
                        }
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

function hideAnimation(currentPage){

    if(currentPage){
        switch(currentPage){
            case "home":
                animateHome(0)
                break
            case "cv":
                animateCv(0)
                break
            case "coveringLetter":
                animateCl(0)
                break
            case "video":
                animateVideo(0)
                break
        }
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

    for (let key in elements) {
        if(!elements[key] instanceof HTMLElement){
            throw new Error("Les éléments ne sont pas trouvées");
        }
    }

    
    let panelTranslate = {from:"-100%",to:"0%"}
    let titleTranslate = {from:"-100%",to:"0%"}
    let textTranslate = {from:"-190%",to:"0%"}
    let imageTranslate = {from:"190%",to:"0%"}
    let panelOpacity = {from:0,to:1}
    if(!type){
        panelTranslate = {from:"0%",to:"-100%"}
        titleTranslate = {from:"0%",to:"-100%"}
        textTranslate = {from:"-0%",to:"-190%"}
        imageTranslate = {from:"0%",to:"190%"}
        panelOpacity = {from:1,to:0}
    }
        

    elements.panel.animate(
        [
            {transform:`translateX(${panelTranslate.from})`,opacity:panelOpacity.from},
            {transform:`translateX(${panelTranslate.to})`,opacity:panelOpacity.to}
        ],
        {
            duration: speedAnimationFast,
            easing: "ease-out",
            fill: "forwards"
        }
    )   

    elements.title.animate(
        [
            {transform:`translateX(${titleTranslate.from})`},
            {transform:`translateX(${titleTranslate.to})`}
        ],
        {
            duration: speedAnimationFast,
            easing: "ease-out",
            fill: "forwards"
        }
    ) 
    
    elements.text.animate(
        [
            {transform:`translateX(${textTranslate.from})`},
            {transform:`translateX(${textTranslate.to})`}
        ],
        {
            duration: speedAnimationFast,
            easing: "ease-out",
            fill: "forwards"
        }
    )  

    elements.image.animate(
        [
            {transform:`translateX(${imageTranslate.from})`,opacity:panelOpacity.from},
            {transform:`translateX(${imageTranslate.to})`,opacity:panelOpacity.to}
        ],
        {
            duration: speedAnimationFast,
            easing: "ease-out",
            fill: "forwards"
        }
    ).addEventListener("finish",e=>{
        page="home"
    })

}

/**
 * cette fonction permet d'animer les composant de la page pricipale
 */
function animateCv(type = 1){
    const image = document.querySelector("#image");

    if(image instanceof HTMLElement){
        let imageTranslate = type ? {from:"190%",to:"0%"} :{from:"0%",to:"-190%"};
        image.animate(
            [
                {transform:`translateY(${imageTranslate.from})`},
                {transform:`translateY(${imageTranslate.to})`}
            ],
            {
                duration: speedAnimationFast,
                easing: "ease-out",
                fill: "forwards"
            }
        ).addEventListener("finish",e=>{
            page="cv"
        })
    
    }
}

/**
 * cette fonction permet d'animer les composant de la page pricipale
 */
function animateCl(type = 1){
    const image = document.querySelector("#image");

    if(image instanceof HTMLElement){
        let imageTranslate = type ? {from:"190%",to:"0%"} :{from:"0%",to:"-190%"};
        image.animate(
            [
                {transform:`translateY(${imageTranslate.from})`},
                {transform:`translateY(${imageTranslate.to})`}
            ],
            {
                duration: speedAnimationFast,
                easing: "ease-out",
                fill: "forwards"
            }
        ).addEventListener("finish",e=>{
            page="coveringLetter"
        })
    
    }
}

/**
 * cette fonction permet d'animer les composant de la page pricipale
 */
function animateVideo(type = 1){
    const video = document.querySelector("#video-v");

    if(video instanceof HTMLElement){
        let videoTranslateW = type ? {from:'0%',to:"70%"} :{from:"70%",to:"0%"};
        let videoTranslateH = type ? {from:'0%',to:"80%"} :{from:"80%",to:"0%"};
        video.animate(
            [
            
                {width:videoTranslateW.from,height:videoTranslateH.from},
                {width:videoTranslateW.to,height:videoTranslateH.to}
            ],
            {
                duration: speedAnimationFast,
                easing: "ease-out",
                fill: "forwards"
            }
        ).addEventListener("finish",e=>{
            page="video"
        })
    }
}

/**
 * cette fonction permet d'initialiser le site
 */
function init(){

    drawNavBarButton()
    loadPage("home",true)
    
}


//lancement du script
init()


document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("active");
});
