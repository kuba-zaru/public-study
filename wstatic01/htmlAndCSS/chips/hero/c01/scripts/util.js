/**
 * 指定したクラスをtoggleする
 * @param {*} elName
 * @param {*} cName
 */
function toggleClass(elName, cName) {
  const el = document.querySelector(elName);
  el.classList.toggle(cName);
}

/**
 * モバイル端末用のイベントが存在するかを判定しイベントを返却する
 * @returns "touchstart":モバイル "click":PC
 */
function judgeClickEventType() {
  // スマホの場合はontouchstartイベントが存在する
  return window.ontouchstart ? "touchstart" : "click";
}
