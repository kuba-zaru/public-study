const arry = ["a", "b", "c"];

console.log("for");
for (let i = 0; i < arry.length; i++) {
  console.log(i);
}

console.log("for in");
for (let i in arry) {
  console.log(i);
}

console.log("for of");
for (let val of arry) {
  console.log(val);
}
