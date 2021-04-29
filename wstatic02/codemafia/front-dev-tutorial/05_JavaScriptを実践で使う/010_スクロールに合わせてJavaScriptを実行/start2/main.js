// const options = {
//   // 基本nullでOK
//   root: null,
//   // 判定をずらす
//   // -100pxとした場合は、要素が画面に100px入った後に判定される
//   rootMargin: "-100px 0px -100px 0px",
//   // 要素が画面に完全に入った場合に処理を行いたい場合は1
//   // この要素は複雑。
//   //   threshold: 1,
// };

/**
 * 初期化
 */
document.addEventListener("DOMContentLoaded", function () {
  console.log("addEventListener");

  const btn01 = document.querySelector("#btn01");
  btn01.addEventListener("click", () => toggleClass("#d01 > .item", "inview"));

  const btn02 = document.querySelector("#btn02");
  btn02.addEventListener("click", () => toggleClass("#d02 > .item", "inview"));

  // observer
  const io = new IntersectionObserver(cbToggleInview);
  const d03_item = document.querySelector("#d03 > .item");
  io.observe(d03_item);
});

/**
 * isIntersecting
 * 要素を画面へ表示する際のin-outを監視する
 * @param {*} entries
 * @param {*} observer
 */
function cbToggleInview(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 要素が表示された
      entry.target.classList.add("inview");
      // 監視を解除したい場合は下記を呼び出す
      // observer.unobserve(entry.target);
    } else {
      // 要素が画面外に出た
      entry.target.classList.remove("inview");
    }
  });
}

/**
 * 指定したクラスをtoggleする
 * @param {*} elName
 * @param {*} cName
 */
function toggleClass(elName, cName) {
  const el = document.querySelector(elName);
  el.classList.toggle(cName);
}
