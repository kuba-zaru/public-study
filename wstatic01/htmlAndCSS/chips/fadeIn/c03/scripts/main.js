document.addEventListener("DOMContentLoaded", function () {
  const observers = [];
  observers.push(new ScrollObserver(".appear", inviewAnimation));
});

function inviewAnimation(el, inview) {
  if (inview) {
    el.classList.add("inview");
  } else {
    el.classList.remove("inview");
  }
}
