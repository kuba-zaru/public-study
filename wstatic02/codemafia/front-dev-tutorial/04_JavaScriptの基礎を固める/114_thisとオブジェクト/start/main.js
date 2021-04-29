const obj = {
  first_name: "Mafia",
  last_name: "Code",
  printFullName: function () {
    // ★この時点でのthisはobjのthis
    console.log(this.first_name); // => Mafia
    const fn = function () {
      // ★setTimout()から呼び出されたあとのthisはwindowのthis
      console.log(this); // => windowオブジェクト
    };
    window.setTimeout(fn);
  },
};

class MyObj {
  constructor() {
    this.first_name = "Mafia";
    this.last_name = "Code";
  }

  printFullName() {
    // ★この時点でのthisはobjのthis
    console.log(this.first_name); // => Mafia
    const fn = function () {
      // ★setTimout()から呼び出されたあとのthisはwindowのthis
      console.log(this); // => window
    };
    window.setTimeout(fn);
  }
}

const obj2 = new MyObj();

obj.printFullName();
obj2.printFullName();
