document.addEventListener("DOMContentLoaded", function () {
  initMenu();
  const heroSlider = new HeroSlider();
});

// メニュー初期化
function initMenu() {
  const mobilMenuBtn = document.querySelector("#mobil-menu-btn > i");
  mobilMenuBtn.addEventListener(judgeClickEventType(), () =>
    toggleClass("#global-container", "menu-open")
  );

  const menuCover = document.querySelector("#menu-cover");
  menuCover.addEventListener(judgeClickEventType(), () =>
    toggleClass("#global-container", "menu-open")
  );

  const navMenu = document.querySelector("#nav-menu");
  navMenu.addEventListener(judgeClickEventType(), () =>
    toggleClass("#global-container", "menu-open")
  );
}

/**
 * 指定したクラスをtoggleする
 * @param {*} elName
 * @param {*} cName
 */
function toggleClass(elName, cName) {
  // console.log("toggleClass()", elName, cName);
  const el = document.querySelector(elName);
  el.classList.toggle(cName);
}

/**
 * モバイル端末用のイベントが存在するかを判定しイベントを返却する
 * @returns
 */
function judgeClickEventType() {
  // スマホの場合はontouchstartイベントが存在する
  return window.ontouchstart ? "touchstart" : "click";
}
