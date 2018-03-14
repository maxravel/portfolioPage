const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slider=document.querySelector('.slider');



next.addEventListener('click', nextPhoto);
function nextPhoto(e){
    slider.style.backgroundImage = "url('./img/gallery1.jpg')";
    //document.body.style.backgroundImage = "url('img_tree.png')";
    console.log('gdfgd');
    e.preventDefault();

}