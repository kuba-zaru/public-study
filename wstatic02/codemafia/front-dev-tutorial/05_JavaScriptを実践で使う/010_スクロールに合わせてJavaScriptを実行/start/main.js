// isIntersecting
// 監視用のfunction
// 要素を画面へ表示する際のin-outを監視する
const cb = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 要素が表示された
      console.log("in view");
      // class付与。これは使いそう！
      entry.target.classList.add("inview");
      // 監視を解除したい場合は下記を呼び出す
      //   observer.unobserve(entry.target);
    } else {
      // 要素が画面外に出た
      console.log("out view");
      // class削除
      entry.target.classList.remove("inview");
    }
  });
  //   alert("intercecting");
};

const options = {
  // 基本nullでOK
  root: null,
  // 判定をずらす
  // -100pxとした場合は、要素が画面に100px入った後に判定される
  rootMargin: "-100px 0px -100px 0px",
  // 要素が画面に完全に入った場合に処理を行いたい場合は1
  // この要素は複雑。
  //   threshold: 1,
};

const io = new IntersectionObserver(cb, options);

// 監視したい要素を設定する
const child = document.querySelector(".child");
io.observe(child);
