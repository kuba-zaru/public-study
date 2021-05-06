document.addEventListener("DOMContentLoaded", function () {
  const main = new Main();
});

class Main {
  constructor() {
    this.header = document.querySelector(".header");
    this.sides = document.querySelectorAll(".side");
    this._observers = []; // 「_」が付与されている変数はsetterとgetterを持っている可能性あり
    this._init();
  }

  // setter
  set observers(val) {
    this._observers.push(val);
  }

  // getter
  get observers() {
    return this._observers;
  }

  _init() {
    new MobileMenu();
    this.hero = new HeroSlider(".swiper-container");
    Pace.on("done", this._paceDone.bind(this)); // ロード完了時に反映したい場合の設定方法
  }

  // ロード完了時に反映したい項目を記述する
  _paceDone() {
    this._scrollInit();
  }

  // スライドする画像のアニメーション用
  _inviewAnimation(el, inview) {
    if (inview) {
      el.classList.add("inview");
    } else {
      el.classList.remove("inview");
    }
  }

  // ヘッダーの背景色用
  _navAnimation(el, inview) {
    if (inview) {
      this.header.classList.remove("triggered");
    } else {
      this.header.classList.add("triggered");
    }
  }

  // サイドアニメーション用
  _sideAnimation(el, inview) {
    if (inview) {
      this.sides.forEach((side) => side.classList.add("inview"));
    } else {
      this.sides.forEach((side) => side.classList.remove("inview"));
    }
  }

  // 波打つテキストアニメーション用
  _textAnimation(el, inview) {
    if (inview) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
    }
  }

  // heroスライダーの自動スクロール用
  _toggleSlideAnimation(el, inview) {
    if (inview) {
      this.hero.start();
    } else {
      this.hero.stop();
    }
  }

  // observersの監視を破棄
  _destroyObservers() {
    this.observers.forEach((ob) => {
      ob.destroy();
    });
  }

  // observersの監視を破棄
  destroy() {
    this._destroyObservers();
  }

  _scrollInit() {
    this.observers = new ScrollObserver(
      ".nav-trigger",
      this._navAnimation.bind(this),
      { once: false }
    );
    this.observers = new ScrollObserver(".cover-slide", this._inviewAnimation);
    this.observers = new ScrollObserver(".appear", this._inviewAnimation);
    this.observers = new ScrollObserver(
      ".tween-animate-title",
      this._textAnimation,
      { rootMargin: "-200px 0px" }
    );
    this.observers = new ScrollObserver(
      ".swiper-container",
      this._toggleSlideAnimation.bind(this),
      { once: false }
    );
    this.observers = new ScrollObserver(
      "#main-content",
      this._sideAnimation.bind(this),
      { once: false, rootMargin: "-300px 0px" }
    );
  }
}
