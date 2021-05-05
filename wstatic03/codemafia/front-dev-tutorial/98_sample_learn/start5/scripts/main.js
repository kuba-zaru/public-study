document.addEventListener("DOMContentLoaded", function () {
  const hero = new HeroSlider(".swiper-container");
  // hero.start();

  const cb = function (el, isIntersecting) {
    if (isIntersecting) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
    }
  };

  const so = new ScrollObserver(".tween-animate-title", cb);

  // スライド画像のアニメーション用
  // cover-slide
  const _inviewAnimation = function (el, inview) {
    if (inview) {
      el.classList.add("inview");
    } else {
      el.classList.remove("inview");
    }
  };
  const so2 = new ScrollObserver(".cover-slide", _inviewAnimation);

  // ヘッダーの背景色用
  // nav-trigger
  const header = document.querySelector(".header");
  const _navAnimation = function (el, inview) {
    if (inview) {
      console.log("_navAnimation 1");
      header.classList.remove("triggered");
    } else {
      console.log("_navAnimation 2");
      header.classList.add("triggered");
    }
  };
  const so3 = new ScrollObserver(".nav-trigger", _navAnimation, {
    once: false,
  });

  new MobileMenu();
});
