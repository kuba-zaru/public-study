const arry = [1, 2, 3, 4, 5];

console.log("普通の呼び出し");
arry.forEach(function (val, idx) {
  console.log(idx, val);
});

console.log("簡略化した呼び出し");
arry.forEach((val, idx) => console.log(idx, val));
