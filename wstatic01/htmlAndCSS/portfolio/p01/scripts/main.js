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

  // accordion
  const aBtn1 = document.querySelectorAll(".accordion-1 .accordion-1__item");
  aBtn1.forEach((item, idx) => {
    let className = ".item-" + (idx + 1);
    item.addEventListener(judgeClickEventType(), () =>
      toggleClass(".accordion-1 " + className, "open")
    );
  });

  // scroll observer
  const observers = [];
  observers.push(new ScrollObserver(".appear", inviewAnimation));
  observers.push(
    new ScrollObserver(".tween-animate-title", textAnimation, {
      rootMargin: "0px 0px",
    })
  );
});

function inviewAnimation(el, inview) {
  // 特定の要素は対象外とする
  if (el.classList.contains("mobile-menu")) {
    return;
  }

  if (inview) {
    el.classList.add("inview");
  } else {
    el.classList.remove("inview");
  }
}

function textAnimation(el, inview) {
  if (inview) {
    const ta = new TweenTextAnimation(el);
    ta.animate();
  }
}
