class MobileMenu {
  constructor() {
    this.DOM = {}; // DOM格納用
    this.DOM.btn = document.querySelector(".mobile-menu__btn"); // メニューボタン
    this.DOM.cover = document.querySelector(".mobile-menu__cover"); // カバー
    this.DOM.container = document.querySelector("#global-container"); // グローバルコンテイナー
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType() {
    // スマホの場合はontouchstartイベントが存在する
    return window.ontouchstart ? "touchstart" : "click";
  }

  _toggle() {
    // メニュー開閉
    this.DOM.container.classList.toggle("menu-open");
  }

  _addEvent() {
    // イベントの登録
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
  }
}

new MobileMenu();
