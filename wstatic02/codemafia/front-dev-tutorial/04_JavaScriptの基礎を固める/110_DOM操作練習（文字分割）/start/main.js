console.log("# script start...");

// DOMがLoadされた後に処理する
document.addEventListener("DOMContentLoaded", function () {
  // elementを取得する
  const el = document.querySelector(".animate-title");

  // 1文字ずつ配列に格納する
  //   let text = el.innerText.split("");
  const innerTexts = el.innerHTML.trim().split("");

  // spanタグを付与する
  const text_span = innerTexts.reduce(function (acc, curr) {
    // s2 = s2.replace(" ", "&nbsp;");
    curr = curr.replace(/\s+/, "&nbsp;"); // スペースの置き換え 正規表現ver
    return acc + `<span = class="char">${curr}</span>`;
  }, "");

  // 結果を反映する(★DOMへのアクセスはパフォーマンスが悪いらしい)
  el.innerHTML = text_span;
});
