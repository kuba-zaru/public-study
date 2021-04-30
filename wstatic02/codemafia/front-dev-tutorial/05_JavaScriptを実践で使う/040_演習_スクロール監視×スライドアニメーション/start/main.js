document.addEventListener("DOMContentLoaded", function () {
  const cb = function (el, isIntersecting) {
    if (isIntersecting) {
      //   console.log("isIntersecting true");
      el.classList.add("inview");
    } else {
      //   console.log("isIntersecting false");
    }
  };

  const so = new ScrollObserver(".cover-slide", cb);
});
