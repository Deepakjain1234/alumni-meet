// navbar shrink script starts here
window.onscroll = function () { scrollFunction() };

function scrollFunction() {


  if(window.innerWidth>1110){
    let nav = document.getElementsByTagName("nav")[0].style;
    let logo1 = document.getElementById("logo-1").style;
    let logo2 = document.getElementById("logo-2").style;
    let navItem = document.getElementsByClassName("nav-items")[0].style;
  
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      nav.height = "94px";
      logo1.height = "60px";
      logo1.width = "60px";
      logo2.height = "60px";
      logo2.width = "60px";
      navItem.marginTop = "22px";
     
      
    } else {
      nav.height = "132px";
      logo1.height = "94px";
      logo1.width = "94px";
      logo2.height = "94px";
      logo2.width = "94px";
      navItem.marginTop = "45px";
      
      
    }
  }
}


const navSlide = () => {
   const burger = document.querySelector('.burger');
   const nav = document.querySelector('.nav-items');
   const navLinks = document.querySelectorAll('.nav-link');
   // Toggle Nav
   burger.addEventListener('click', () => {
     nav.classList.toggle('nav-active');
     // Animate links
     navLinks.forEach((link, index) => {
       if (link.style.animation) {
         link.style.animation = '';
       }
       else {

         link.style.animation = 'navLinkFade 0.5s ease forwards  1';

       }
     });
     // Burger Animation
     burger.classList.toggle('toggle');
   });


 }
 navSlide();

 function closeNav(){
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-items');
  if(window.innerWidth<1110){
    nav.classList.remove("nav-active");
    burger.classList.remove('toggle');

  }
}