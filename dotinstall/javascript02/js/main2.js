"use strict";

{
  document.write("<p>javascriptの結果をconsoleに出力する</p>");
  document.write("<p>function</p>");
  document.write("<p>なにをやっているかはコードを確認すべし</p>");

  console.log("■普通のfunction");
  function sum01(a, b, c) {
    return a + b + c;
  }
  console.log(sum01(1, 2, 3));

  console.log("関数式");
  const sum02 = function (a, b, c) {
    return a + b + c;
  };
  console.log(sum02(1, 2, 3));

  console.log("■アロー関数");
  const sum03 = (a, b, c) => {
    return a + b + c;
  };
  console.log(sum03(1, 2, 3));
}
