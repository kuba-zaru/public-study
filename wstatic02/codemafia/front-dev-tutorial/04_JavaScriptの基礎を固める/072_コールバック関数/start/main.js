arry = [1, 2, 3, 4, 5];

// callbackを受けとる用
function forEach(ary, callback) {
  for (let i = 0; i < ary.length; i++) {
    callback(ary[i]);
  }
}

// cqallback用
function log(val) {
  console.log(val);
}

// cqallback用
function double(val) {
  val = val * 2;
  log(val);
}

console.log("log");
forEach(arry, log);

console.log("double");
forEach(arry, double);

console.log("関数を直接記述");
forEach(arry, function (val) {
  val = val * 2;
  log(val);
});
