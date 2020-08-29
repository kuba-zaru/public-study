"use strict";

document.write("<p>javascriptの結果をconsoleに出力する</p>");
document.write("<p>基本01</p>");
document.write("<p>なにをやっているかはコードを確認すべし</p>");

console.log("■文字列の出力");
console.log("hello world");

console.log("■演算子");
console.log(10 / 3);
console.log(10 * 3); // 3.333...だが少数は正確に計算されない
console.log(10 ** 3); // べき乗 10の3乗 1000
console.log("hello " + "world"); // 文字列

console.log("■データ型");
console.log(typeof 1); // number
console.log(typeof 1.5); // number
console.log(typeof "1"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof document); // object
console.log(typeof null); // object(javascriptのバグ)

console.log("■データ型2");
console.log("5" - "3"); // 文字列同士の計算が可能
console.log("5" * "3"); // 文字列同士の計算が可能
console.log("5" + "3"); // 文字列同士の計算ができない
console.log(5 + "3"); // 文字列同士の計算ができない
console.log("5" + 3); // 文字列同士の計算ができない
console.log(parseInt("5", 10) + 3); // parseInt 10進数の変数に変換する
console.log(parseInt("abc", 10) + 3); // NaN(エラーにはならないので注意！)

console.log("真偽値");
console.log(Boolean(true)); // true
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("")); // false
