function hideMenu(){
    document.getElementById('nav-menu').classList.toggle('hide-menu');
    document.querySelector('.navbar').classList.toggle('add-margin');
}
// function slideShow(){
//     let index = 0;
//     const imageArray = ["./resources/hero.jpg","./resources/hero-2.jpg","./resources/hero-3.jpg"];
//     const imageCarousel = document.getElementById('carousel');
//     setInterval(()=>{
//         imageCarousel.setAttribute('src',imageArray[index % 3]);
//         index++;
//     },4000);
// }

const navLinks = document.querySelectorAll('.nav-list-link');
navLinks.forEach(link =>{
    link.addEventListener('click',()=>{
        if(window.innerWidth < 960){
            document.getElementById('nav-menu').classList.toggle('hide-menu');
            document.querySelector('.navbar').classList.remove('add-margin');
            }
        });
})
const hamburger = document.getElementById('hamburger'); 
hamburger.addEventListener('click',hideMenu);


document.addEventListener('DOMContentLoaded', ()=>{
    // slideShow();
    if(window.innerWidth >= 960){
        document.getElementById('nav-menu').classList.remove('hide-menu');

    }
});

window.addEventListener('resize',()=> {
    if(window.innerWidth >= 960){
        document.getElementById('nav-menu').classList.remove('hide-menu');
    }
    else{
        document.getElementById('nav-menu').classList.add('hide-menu');
        document.querySelector('.navbar').classList.remove('add-margin');
    }
})
