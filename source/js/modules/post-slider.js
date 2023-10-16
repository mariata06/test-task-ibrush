const initPostSlider = () => {
  let swiper = Swiper;
  let swiperExist = false;

  function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
    let desktop = window.matchMedia('(min-width: 768px)');

    if (mobile.matches) {
      if (!swiperExist) {
        swiperExist = true;
        swiper = new Swiper(".mySwiper", {
          pagination: {
            el: '.swiper-pagination',
          },
          spaceBetween: 16,
        });
      }
    } else if (desktop.matches) {
      if (swiperExist) {
        swiper.destroy();
        swiperExist = false;
      }
    }
  }

  window.addEventListener('load', function () {
    swiperMode();
  });

  window.addEventListener('resize', function () {
    swiperMode();
  });
};

export {initPostSlider};
