"use strict";

{
  document.write("<p>配列</p>");

  // 配列の定義
  const scores = [80, 90, 40];

  document.writeln("<p>■配列の表示</p>");
  console.log(scores);
  document.writeln(`<p>scores = ${scores}</p>`);
  document.writeln(`<p>scores.length = ${scores.length}</p>`);
  document.writeln(`<p>scores[1] = ${scores[1]}</p>`);

  document.writeln("<p>■配列への値の追加 push()</p>");
  scores.push(11, 12);
  document.writeln(`<p>scores = ${scores}</p>`);

  document.writeln("<p>■配列の先頭の要素を削除 shift()</p>");
  scores.shift();
  document.writeln(`<p>scores = ${scores}</p>`);

  document.writeln("<p>■配列の二つ目を削除 splice()</p>");
  scores.splice(1, 1);
  document.writeln(`<p>scores = ${scores}</p>`);

  document.writeln(
    "<p>■配列への値の追加 追加と削除は同時に行うことが可能 splice() </p>"
  );
  scores.splice(1, 0, 21, 22);
  document.writeln(`<p>scores = ${scores}</p>`);

  document.writeln("<p>■配列の結合 スプレット構文 ... 値コピーされる 配列の複製に使用できる</p>");
  const otherScores = [1, 2, ...scores];
  document.writeln(`<p>otherScores = ${otherScores}</p>`);

  document.writeln("<p>■引数でスプレット構文を使用 ...</p>");
  const arg1 = [10, 20];
  const func1 = (a, b) => {
    return a + b;
  };
  document.writeln(`<p>arg1 = ${arg1}</p>`);
  document.writeln(`<p>func1(...arg1) = ${func1(...arg1)}</p>`);

  document.writeln("<p>■分割代入で配列から値を取得する [a, b] = scores</p>");
  let [a, b] = scores;
  document.writeln(`<p>a = ${a}</p>`);
  document.writeln(`<p>b = ${b}</p>`);

  document.writeln("<p>■分割代入で変数の値を入れ替える [a, b] = [b, a]</p>");
  [a, b] = [b, a];
  document.writeln(`<p>a = ${a}</p>`);
  document.writeln(`<p>b = ${b}</p>`);

  document.writeln("<p>■forEach</p>");
  scores.forEach((score, index) => {
    document.writeln(`<p>index = ${index} score = ${score} </p>`);
  });
}
