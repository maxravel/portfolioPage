//Gallery

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



//About
const imgs = document.querySelectorAll('.imgs img');

imgs.forEach(d => d.addEventListener('click', clickImg));

function clickImg(e){
    imgs.forEach(x => (x.style.opacity=1));
    e.target.style.opacity=0.4;
    //e.target.classList.toggle('opac');
    //e.target.innerHTML = '<p class="textImg">Lorem ipsum </p>';
    // Voluptas ipsum, sed doloremque excepturi earum temporibus beatae 
    // asperiores assumenda harum illo laboriosam eos pariatur doloribus 
    // tempore ab cum architecto, numquam voluptatem.
}
