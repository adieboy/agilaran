const navbar = document.querySelector('header');
  window.onscroll = () => {
    if(window.scrollY > 100){
      navbar.classList.add('bg-color-primary');
      navbar.classList.add('border-b');
      navbar.classList.add('border-color-gray');
    }else{
      navbar.classList.remove('bg-color-primary-dark');
      navbar.classList.remove('border-b');
      navbar.classList.remove('border-color-gray');
    }
  }

  // Mobile menu
  const hamburger = document.querySelector('#hamburger');
        const menu = document.querySelector('#menu');
        const home = document.querySelector('#home');
        const hLink = document.querySelectorAll('#hLink');
        const faSolid = document.querySelector(".fa-solid");

        hamburger.addEventListener("click", () => {
            menu.classList.toggle('hidden');
            home.classList.toggle('hidden');
            faSolid.classList.toggle('fa-xmark');
        })

        hLink.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.toggle('hidden');
                home.classList.toggle('hidden');
                faSolid.classList.toggle('fa-xmark');
            })
        })

     

    // Team
    const userTexts = document.getElementsByClassName('user-text');
    const userPics = document.getElementsByClassName('user-pic');

    function showReview(){
      for(userPic of userPics){
        userPic.classList.remove("active-pic");
      }
      for(userText of userTexts){
        userText.classList.remove("active-text");
      }

      let i = Array.from(userPics).indexOf(event.target);

      userPics[i].classList.add('active-pic');
      userTexts[i].classList.add('active-text');


    }

    // Login

    function btnLogin(){
      const textSign = document.querySelector('.login');
      if(textSign.innerText ==='Sign In'){
        textSign.innerText = 'Sign Up';
      }else{
        textSign.innerText = 'Sign In'
      }
    }

    const toggleBtn = document.getElementById('toggleBtn');

    const card_1_front =document.querySelector("#card_1_front");
    const card_1_back =document.querySelector("#card_1_back");

    toggleBtn.addEventListener('change', () =>{
      card_1_front.classList.toggle('-rotate-y-180');
      card_1_back.classList.toggle('rotate-y-180');
    })

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

 

const activeLink = () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav__link');

  let current = 'home';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;

    if(this.scrollY >= sectionTop -60){
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(item => {
    item.classList.remove('text-color-secondary');
    if(item.href.includes(current)){
      item.classList.add('text-color-secondary');

    }
  });
};

window.addEventListener('scroll',activeLink);

const sr = ScrollReveal({
  origin: 'right',
  distance: '60px',
  duration: 2000,
  delay:400
});

sr.reveal('.home__image');
sr.reveal('.home__content',{origin:'left'});
sr.reveal('.feature__content',{origin:'right'});
sr.reveal('.feature__card',{interval:300});
sr.reveal('.download__section',{origin:'top'});
sr.reveal('.download__section-1',{origin:'bottom'});
sr.reveal('.g__l',{origin:'left'});
sr.reveal('.g__b',{origin:'bottom'});
sr.reveal('.g__r',{origin:'right'});
sr.reveal('.donate__content',{origin:'left'});
sr.reveal('.donate__content-1',{origin:'right'});
sr.reveal('.team__content',{origin:'top'});
sr.reveal('.team__content-1',{origin:'bottom'});
sr.reveal('.sign__content',{origin:'left'});
sr.reveal('.sign__content-1',{origin:'right'});
sr.reveal('.news__card',{interval:300});
sr.reveal('.news__content',{origin:'top'});
sr.reveal('.news__content-1',{origin:'bottom'});
sr.reveal('footer',{origin:'bottom',duration:2000,delay:400,distance:'60px'});

