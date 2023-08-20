// Hamburger menu
let hamburger = document.querySelector(".hamburger");
let toggleMenu = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    toggleMenu.classList.toggle("active");
})

// carousel
const swiper = new Swiper('.swiper', {
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });