"use strict";

{
  document.write("<p>配列２</p>");

  // 配列の定義
  const scores = [80, 90, 1, 15, 20];

  document.writeln("<p>■配列の表示</p>");
  document.writeln(`<p>scores = ${scores}</p>`);

  document.writeln("<p>■mapを利用して配列の要素に対して処理を行う</p>");
  const updateScores = scores.map((score) => {
    return score + 1;
  });
  document.writeln(`<p>updateScores = ${updateScores}</p>`);

  document.writeln(
    "<p>■mapを利用して配列の要素に対して処理を行う 省略した記述</p>"
  );
  const updateScores2 = scores.map((score) => score + 2);
  document.writeln(`<p>updateScores2 = ${updateScores2}</p>`);

  document.writeln("<p>■filter()</p>");
  const updateScores3 = scores.filter((score) => {
    if (score % 2 === 0) {
      return true;
    } else {
      return false;
    }
  });
  document.writeln(`<p>updateScores3 = ${updateScores3}</p>`);

  document.writeln("<p>■filter() 省略した記述</p>");
  const updateScores4 = scores.filter((score) => score % 2 === 0);
  document.writeln(`<p>updateScores4 = ${updateScores4}</p>`);
}
