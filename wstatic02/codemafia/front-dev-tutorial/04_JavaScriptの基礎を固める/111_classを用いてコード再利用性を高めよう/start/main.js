document.addEventListener("DOMContentLoaded", function () {
  //   const el = document.querySelector(".animate-title");
  //   const el2 = document.querySelector(".animate-title-2");
  //   const str = el.innerHTML.trim().split("");
  //   const str2 = el2.innerHTML.trim().split("");

  // let concatStr = '';

  // for(let c of str) {
  //     c = c.replace(/\s+/, '&nbsp;');
  //     concatStr += `<span class="char">${c}</span>`;
  // }

  //   el.innerHTML = str.reduce((acc, curr) => {
  //     curr = curr.replace(/\s+/, "&nbsp;");
  //     return `${acc}<span class="char">${curr}</span>`;
  //   }, "");
  //   el2.innerHTML = str2.reduce((acc, curr) => {
  //     curr = curr.replace(/\s+/, "&nbsp;");
  //     return `${acc}<span class="char">${curr}</span>`;
  //   }, "");

  // 作成したクラスを使用する
  const ta = new TextAnimation(".animate-title");
  const ta2 = new TextAnimation(".animate-title-2");

  // ★一定時間後に処理を実行する場合の記述方法
  // 0.5sの例
  window.setTimeout(() => {
    ta.animate();
    ta2.animate();
  }, 500);

  console.log("addEventListener end");
});

// 処理をclass化する
class TextAnimation {
  constructor(el) {
    this.el = el = document.querySelector(el);
    this.chars = el.innerHTML.trim().split("");
    this.el.innerHTML = this._spritText();
  }
  // ★プライベートメソッドは「_」で始める(ただの慣例)
  _spritText() {
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, "&nbsp;");
      return `${acc}<span class="char">${curr}</span>`;
    }, "");
  }
  animate() {
    this.el.classList.toggle("inview");
  }
  log() {
    console.log(this.el);
  }
}
