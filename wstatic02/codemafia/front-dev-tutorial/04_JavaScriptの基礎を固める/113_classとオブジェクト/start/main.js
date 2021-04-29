// オブジェクト
const obj = {
  first_name: "Mafia",
  last_name: "Code",
  printFullName: function () {
    console.log("hello");
  },
};

obj.printFullName();

// クラス
class MyObj {
  constructor() {
    this.first_name = "Mafia";
    this.last_name = "Code";
  }
  printFullName() {
    console.log("hello");
  }
}

myobj = new MyObj();
myobj.printFullName();

// ★結果要確認！
// 下記の結果は酷似している
// javascriptのclassはObjectと同じ。
// classはObjectを生成する為の書き方の一つ
console.log("obj", obj);
console.log("myobj", myobj);
