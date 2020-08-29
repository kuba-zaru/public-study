"use strict";
{
  /** bingo */
  const bingo = [
    [-1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1],
  ];

  const bingo_min = 0;
  const bingo_max = 99;
  const bingo_row = 5;
  const bingo_col = 5;


  // const list = Util.convToOneArray(bingo);
  // console.log(list);

  // bingoの生成
  for (let i = 0; i < bingo.length; i++) {
    for (let j = 0; j < bingo[0].length; j++) {
      const atari = Util.getRandom(bingo_min, bingo_max);
      bingo[i][j] = atari;
    }
  }

  // bingoの表示
  document.writeln(`<div class="container">`);
  document.writeln(`<table class="bingoo-table">`);

  document.writeln(`<tr class="">`);
  document.writeln(`<th class="bingoo-cell">b</th>`);
  document.writeln(`<th class="bingoo-cell">i</th>`);
  document.writeln(`<th class="bingoo-cell">n</th>`);
  document.writeln(`<th class="bingoo-cell">g</th>`);
  document.writeln(`<th class="bingoo-cell">o</th>`);
  document.writeln(`</tr>`);

  for (let i = 0; i < bingo.length; i++) {
    document.writeln(`<tr class="">`);
    for (let j = 0; j < bingo[0].length; j++) {
      document.writeln(`<td class="bingoo-cell">${bingo[i][j]}</td>`);
    }
  }

  document.writeln(`</tr>`);
  document.writeln(`</table>`);
  document.writeln(`</div>`);

}
