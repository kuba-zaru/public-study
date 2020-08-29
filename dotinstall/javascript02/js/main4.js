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

  document.writeln("<p>■二次元配列を一次元配列に変換する</p>");
  const list_double = [
    [1, 2, 3],
    [11, 12, 13],
    [21, 22, 23],
  ];
  document.writeln(`<p>list_double = ${list_double}</p>`);
  /**
   * 二次元配列を一次元配列に変換する
   * @param {*} array 変換元二次元配列
   * @return {array}
   */
  function conv(array) {
    const result = array.reduce((pre, current) => {
      pre.push(...current);
      return pre;
    }, []);
    return result;
  }

  const list_single = conv(list_double);
  console.log(list_single);
  document.writeln(`<p>list_single = ${list_single}</p>`);

  document.writeln("<p>■一次元配列を次二元配列に変換する</p>");
  /**
   * 一次元配列を次二元配列に変換する
   * @param {*} array 変換元一次元配列
   * @param {*} col カラム数
   * @return {array}
   */
  function convToTowArray(array, col) {
    const result = [];
    for (let i = 0; i < array.length; i += col) {
      result.push(array.slice(i, i + col));
    }
    return result;
  }
  const list_double2 = convToTowArray(list_single, 3);
  console.log(list_double2);
  document.writeln(`<p>list_double2 = ${list_double2}</p>`);
}
