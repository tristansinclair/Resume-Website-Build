/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{reset: false}); 
sr.reveal('.home__subtitle',{delay: 100, reset: false});
sr.reveal('.button',{delay: 200, reset: false}); 
sr.reveal('.home__img',{delay: 400, reset: false}); 
sr.reveal('.home__social-icon',{ interval: 200, reset: false}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{reset: false,}); 
sr.reveal('.about__subtitle',{delay: 400, reset: false}); 
sr.reveal('.about__text',{delay: 400, reset: false}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{reset: false}); 
sr.reveal('.skills__text',{reset: false}); 
sr.reveal('.skills__data',{interval: 200, reset: false}); 
sr.reveal('.skills__box', {interval: 200, reset: false})
sr.reveal('.skills__img',{delay: 600, reset: false});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200, reset: false}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200, reset: false}); 




