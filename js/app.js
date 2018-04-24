//*********************************Gallery***********************
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slider=document.querySelector('.slider');
const slide=document.querySelector('#slide');
const photos = ['./img/gallery1.jpg', './img/gallery2.jpg', './img/gallery3.jpg', './img/gallery4.jpg']

let i = 0;

next.addEventListener('click', nextPhoto);

function nextPhoto(e){

    i<photos.length-1 ? i++ : i=0;
    slide.src = photos[i];
    e.preventDefault();

}

prev.addEventListener('click', prevPhoto);

function prevPhoto(e){

    i>0 ? i-- : i=photos.length-1;
    slide.src = photos[i];
    e.preventDefault();

}



//**********************************About**************************
const imgs = document.querySelectorAll('.imgs img');

imgs.forEach(d => d.addEventListener('click', clickImg));

//removing past events effects
function clickImg(e){
    imgs.forEach(x => {
        x.style.opacity=1; 
        x.style.cursor = 'pointer'
        if(x.parentElement.childNodes[1] !== undefined){
            x.parentElement.removeChild(x.parentElement.childNodes[1]);
        } 
    });

    
    e.target.style.opacity=0.4;
    e.target.style.cursor = 'pointer';
    
    let parent = e.target.parentElement;
    let par = null;
    par = document.createElement("p");
    par.appendChild(document.createTextNode(e.target.alt));
    
    par.style.fontSize="20px";
    par.style.position="relative";
    par.style.top = "-200px";
    par.style.margin = "0px";
    par.style.padding = "0px";
    par.style.background = "gold";
    par.style.color = "#050035";
    parent.appendChild(par);
    
    // Voluptas ipsum, sed doloremque excepturi earum temporibus beatae 
    // asperiores assumenda harum illo laboriosam eos pariatur doloribus 
    // tempore ab cum architecto, numquam voluptatem.
}



//************************************Form***************************
let formul = document.forms.myForm;

formul.name.onfocus = function(){
    formul.name.style.border="2px solid #050035";
}

formul.mail.onfocus = function(){
    formul.mail.style.border="2px solid #050035";
}

formul.message.onfocus = function(){
    formul.message.style.border="2px solid #050035";
}

formul.name.onblur = function(){
    formul.name.style.border="2px solid rgb(156, 218, 247)";
}

formul.mail.onblur = function(){
    formul.mail.style.border="2px solid rgb(156, 218, 247)";
}

formul.message.onblur = function(){
    formul.message.style.border="2px solid rgb(156, 218, 247)";
}
