const navSlide = () =>{
  const burger = document.querySelector('.burgerStyle');
  const nav = document.querySelector('.navlink');
  const navMenu =  document.querySelectorAll('.navlink li');


  burger.addEventListener('click', () => {
    //toggle nav
    nav.classList.toggle('nav-active');

    //animate link menu
    navMenu.forEach((link, index) => {
      if(link.style.animation){
        link.style.animation = '';
      } else {
        link.style.animation = `navlinkfade 0.3s ease forwards ${index / 7 + 0.3}s`;
      }
    });
    burger.classList.toggle('toggle');
  });

}

navSlide();


// const app = () =>{
//   navSlide();
// }
