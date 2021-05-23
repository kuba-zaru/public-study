document.addEventListener("DOMContentLoaded", function () {
  const observers = [];

  observers.push(
    new ScrollObserver(".tween-animate-title", textAnimation, {
      rootMargin: "0px 0px",
    })
  );
});

function textAnimation(el, inview) {
  if (inview) {
    const ta = new TweenTextAnimation(el);
    ta.animate();
  }
}
