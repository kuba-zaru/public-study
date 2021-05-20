document.addEventListener("DOMContentLoaded", function () {
  // mobile menu button
  const mmBtn = document.querySelector(".mobile-menu__button");
  mmBtn.addEventListener(judgeClickEventType(), () =>
    toggleClass("#container", "menu-open")
  );
  mmBtn.addEventListener(judgeClickEventType(), () =>
    toggleClass(".mobile-menu", "inview")
  );

  // menu cover
  const mmCover = document.querySelector(".mobile-menu__cover");
  mmCover.addEventListener(judgeClickEventType(), () =>
    toggleClass("#container", "menu-open")
  );
  mmCover.addEventListener(judgeClickEventType(), () =>
    toggleClass(".mobile-menu", "inview")
  );

  // menu link
  const mmLinks = document.querySelectorAll(".mobile-menu__link");
  mmLinks.forEach((item) => {
    item.addEventListener(judgeClickEventType(), () =>
      toggleClass("#container", "menu-open")
    );
    item.addEventListener(judgeClickEventType(), () =>
      toggleClass(".mobile-menu", "inview")
    );
  });

  // helo
  const heroSlider = new HeroSlider();
});
