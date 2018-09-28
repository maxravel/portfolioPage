//**********************************About**************************
const imgs = document.querySelectorAll('.imgs img');

imgs.forEach(d => d.addEventListener('click', clickImg));

function clickImg(e){

    //clicking before clicked img removing past clicked effects
    if(e.target.parentElement.childNodes[1].style.visibility==="visible"){
        e.target.parentElement.childNodes[1].style.visibility = "hidden";
        e.target.style.opacity = 1;
    }

    //clicking another img removing effects of before click
    else{
        imgs.forEach(x => {
            //removing past click effects
            x.style.opacity=1; 
            //x.style.cursor = 'pointer'
            x.parentElement.childNodes[1].style.visibility = "hidden";
        });
        //this click effects
        e.target.style.opacity=0.4;
        e.target.style.cursor = 'pointer';
        e.target.parentElement.childNodes[1].style.visibility="visible";
    }
    // Voluptas ipsum, sed doloremque excepturi earum temporibus beatae 
    // asperiores assumenda harum illo laboriosam eos pariatur doloribus 
    // tempore ab cum architecto, numquam voluptatem.
}



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



//************************************OFFER***************************
const circle1= document.querySelector("#circle1");
const circle2= document.querySelector("#circle2");
const circle3= document.querySelector("#circle3");

const sec2par1= document.querySelector("#sec2-par1");
const sec2par2= document.querySelector("#sec2-par2");
const sec2par3= document.querySelector("#sec2-par3");

circle1.addEventListener("click", function(){
    sec2par1.style.display ="block";
    sec2par2.style.display="none";
    sec2par3.style.display="none";
    circle1.style.backgroundColor="white";
    circle2.style.backgroundColor = "rgb(61, 61, 61)";
    circle3.style.backgroundColor = "rgb(61, 61, 61)";
});

circle2.addEventListener("click", function(){
    sec2par1.style.display ="none";
    sec2par2.style.display="block";
    sec2par3.style.display="none";
    circle1.style.backgroundColor ="rgb(61, 61, 61)";
    circle2.style.backgroundColor = "white";
    circle3.style.backgroundColor = "rgb(61, 61, 61)";
});

circle3.addEventListener("click", function(){
    sec2par1.style.display ="none";
    sec2par2.style.display="none";
    sec2par3.style.display="block";
    circle1.style.backgroundColor ="rgb(61, 61, 61)";
    circle2.style.backgroundColor = "rgb(61, 61, 61)";
    circle3.style.backgroundColor = "white";
});


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