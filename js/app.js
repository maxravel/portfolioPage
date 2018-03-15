const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slider=document.querySelector('.slider');
const slide=document.querySelector('#slide');
const photos = ['./img/gallery1.jpg', './img/gallery2.jpg']

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
