// 関数オブジェクト
hello_variable = function (name = "Tom") {
  console.log("helllo " + name);
};

// アロー関数使用版
hello = (name = "Tom") => console.log("helllo " + name);

hello("Code Mafia");
hello("Code Mafia 2");
hello();

// 簡略化
const arry = [1, 2, 3];
arry.forEach((value) => console.log(value));
