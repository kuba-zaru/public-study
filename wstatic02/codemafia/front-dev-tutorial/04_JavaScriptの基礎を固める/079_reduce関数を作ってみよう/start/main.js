// 文字列を宣言して配列に格納する
const str = "animation";
const strArry = str.split("");

function tag(accu, curr) {
  return `${accu}<${curr}>`;
}

// 自作のreducer
function reduce(arry, callback, defaultValue = "") {
  let accu = defaultValue;
  for (let curr in arry) {
    accu = callback(accu, curr);
  }
  return accu;
}

console.log("# 規定のreducerを呼び出す");
const result = strArry.reduce(tag, "");
console.log(result);

console.log("# 自作のreducerを呼び出す");
const result2 = reduce(strArry, tag);
console.log(result2);
