// domを取得する
const btn = document.querySelector("#btn");

// イベントハンドラ
const handleBtn1 = function () {
  alert("hello");
};

// イベントリスナーに登録
btn.addEventListener("click", handleBtn1);
btn.addEventListener("mouseenter", handleBtn1);

// イベントの解除
btn.removeEventListener("mouseenter", handleBtn1);

// ---------------------------------------------

// domを取得する
const btn2 = document.querySelector("#btn2");

// イベントハンドラ
const handleChangeColor = function () {
  // thisにはクリックされた要素が渡ってくる
  this.style.color = "red";
};

// イベントハンドラ
const handleBackgroundColor = function () {
  // thisにはクリックされた要素が渡ってくる
  this.style.backgroundColor = "skyblue";
};

// イベントリスナーに登録
btn2.addEventListener("click", handleChangeColor);
btn2.addEventListener("click", handleBackgroundColor);

// ---------------------------------------------

// domを取得する
const btn3 = document.querySelector("#btn3");

// イベントリスナーに登録
btn3.onclick = handleChangeColor;
