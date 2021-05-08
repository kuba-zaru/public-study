document.addEventListener("DOMContentLoaded", function () {
  const mmBtn = document.querySelector(".mobile-menu-button > button");
  mmBtn.addEventListener(judgeClickEventType(), () =>
    toggleClass("#container", "menu-open")
  );
  const mmCover = document.querySelector(".mobile-menu__cover");
  mmCover.addEventListener(judgeClickEventType(), () =>
    toggleClass("#container", "menu-open")
  );

  const mmLinks = document.querySelectorAll(".mobile-menu__link");
  mmLinks.forEach((item) => {
    item.addEventListener(judgeClickEventType(), () =>
      toggleClass("#container", "menu-open")
    );
  });
});
