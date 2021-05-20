/**
 * 指定した要素のクラスをtoggleする
 * @param {*} el
 * @param {*} cName
 */
function toggleElementToClass(el, cName) {
  el.classList.toggle(cName);
}

/**
 * 指定した要素のクラスをtoggleする
 * @param {*} elName
 * @param {*} cName
 */
function toggleClass(elName, cName) {
  const el = document.querySelector(elName);
  toggleElementToClass(el, cName);
}

/**
 * モバイル端末用のイベントが存在するかを判定しイベントを返却する
 * @returns "touchstart":モバイル "click":PC
 */
function judgeClickEventType() {
  // スマホの場合はontouchstartイベントが存在する
  return window.ontouchstart ? "touchstart" : "click";
}
