document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector("#btn");
  const ta = new TextAnimation(".animate-title");
  const ta2 = new TextAnimation(".animate-title-2");
  ta.animate();
  ta2.animate();

  // ★bindでthisを固定する
  btn.addEventListener("click", ta.animate.bind(ta));

  // ★無名関数でもthisを固定できる(理由不明)
  btn.addEventListener("click", () => {
    ta2.animate(ta2);
  });
});

class TextAnimation {
  constructor(el) {
    this.el = document.querySelector(el);
    this.chars = this.el.innerHTML.trim().split("");
    this.el.innerHTML = this._splitText();
  }
  _splitText() {
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, "&nbsp;");
      return `${acc}<span class="char">${curr}</span>`;
    }, "");
  }
  animate() {
    console.log(this);
    this.el.classList.toggle("inview");
  }
}
