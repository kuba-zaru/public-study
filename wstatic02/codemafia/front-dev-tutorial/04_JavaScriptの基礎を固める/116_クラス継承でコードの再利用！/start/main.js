document.addEventListener("DOMContentLoaded", function () {
  const ta = new TweenTextAnimation(".tween-animate-title");
  ta.animate();
});

class TextAnimation {
  constructor(el) {
    this.DOM = {}; // DOMにはDOMのオブジェクトを格納する
    this.DOM.el = document.querySelector(el);
    this.chars = this.DOM.el.innerHTML.trim().split("");
    this.DOM.el.innerHTML = this._splitText();
  }
  _splitText() {
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, "&nbsp;");
      return `${acc}<span class="char">${curr}</span>`;
    }, "");
  }
  animate() {
    this.DOM.el.classList.toggle("inview");
  }
}

// TextAnimationを継承
class TweenTextAnimation extends TextAnimation {
  constructor(el) {
    super(el);
    this.DOM.chars = this.DOM.el.querySelectorAll(".char");
  }
  animate() {
    // アニメーションを
    this.DOM.el.classList.add("inview");

    this.DOM.chars.forEach((c, idx) => {
      TweenMax.to(c, 0.6, {
        ease: Back.easeOut,
        delay: idx * 0.05,
        startAt: { y: "-50%", opacity: 0 },
        y: "0%",
        opacity: 1,
      });
    });
  }
}
