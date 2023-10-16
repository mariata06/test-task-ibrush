let initNav = () => {
  const navLinks = document.querySelectorAll('.main-nav__item');
  navLinks.forEach((item) => {
    const arrow = item.querySelector('svg');
    // console.log(arrow);

    item.addEventListener('click', () => {
      navLinks.forEach((item2) => {
        if (item === item2) {
          item.classList.toggle('is-active');
        } else {
          item2.classList.remove('is-active');
        }
      });

    });
  });


};

export {initNav};
