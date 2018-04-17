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

function clickImg(e){
    imgs.forEach(x => {
        x.style.opacity=1; 
        x.style.cursor = 'pointer'
    });
    e.target.style.opacity=0.4;
    e.target.style.cursor = 'default';
    console.log(e.target.alt);
    //e.target.classList.toggle('opac');
    // var par = document.createElement("p");
    // par.appendChild(document.createTextNode('adfasdfasdfadsfa'));
    // par.style.zIndex='999';
    // e.target.appendChild(par);
    // e.target.innerHTML = '<p class="textImg">Lorem ipsum </p>';
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
