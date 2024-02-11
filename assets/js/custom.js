var swiper = new Swiper(".banner-swiper", {
  spaceBetween: 0,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 1000,
  autoplay: {
    delay: 3000,
  },

  slidesPerView: 1,
  allowTouchMove: false,
  disableOnInteraction: true,
  navigation: {
    nextEl: ".swiper-button-banner-next",
    prevEl: ".swiper-button-banner-prev",
  },
});

const bars = document.querySelector('.bars')
const mobile = document.querySelector('.mobile')
const times = document.querySelector('.times')

bars.addEventListener('click', (e) => {
  mobile.classList.toggle('show-times')
})

window.addEventListener('mouseup', (e) => {
  if(!mobile.contains(e.target)) {
    mobile.classList.remove('show-times')
  }
})