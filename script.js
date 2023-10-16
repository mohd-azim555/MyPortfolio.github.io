//navbar 
const navE =document.getElementById('navbar');
     window.addEventListener('scroll',() =>{
      if(window.scrollY>=56){
        navE.classList.add('navbar-scrolled');
      }else if(window.scrollY<56){
        navE.classList.remove('navbar-scrolled');
      }
     });

     // typed.js for Intro
     var typed = new Typed('#intro', {
        strings: ['Hi! My name is AZIM'],
        typeSpeed: 100,
      });
// typed.js for developer
     var typed = new Typed('#element', {
        strings: ['Software Developer','Web Developer','FullStack Developer'],
        typeSpeed: 80,
        backSpeed:50,
        loop:true
      });

