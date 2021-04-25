const arry = [1, 2, 3, 4, 5];

// 文字列を定義して配列に変換する
const str = "animation";
const strArry = str.split("");
console.log(strArry);

// reducerを用いて文字列に修飾を加える
// 初期値に「""」を渡しているので注意！
const result = strArry.reduce((accu, curr) => {
  return accu + "<" + curr + ">";
}, "");
console.log(result);
