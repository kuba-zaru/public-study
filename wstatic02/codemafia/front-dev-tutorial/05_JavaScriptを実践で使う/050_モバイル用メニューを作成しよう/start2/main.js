document.addEventListener("DOMContentLoaded", function () {
  // メニューボタン
  const mobilMenuBtn = document.querySelector("#mobil-menu-btn > button");
  mobilMenuBtn.addEventListener("click", () =>
    toggleClass("#global-container", "menu-open")
  );
  // mobilMenuBtn.addEventListener("click", () =>
  //   toggleClass("#container", "menu-open")
  // );
});

/**
 * 指定したクラスをtoggleする
 * @param {*} elName
 * @param {*} cName
 */
function toggleClass(elName, cName) {
  console.log("toggleClass()", elName, cName);
  const el = document.querySelector(elName);
  el.classList.toggle(cName);
}
