"use strict";
{
  /** bingo */
  const bingo_min = 0;
  const bingo_max = 99;
  const bingo_row = 5;
  const bingo_col = 5;

  /** bingo作成用の配列 */
  const temp_bingo = [];

  // bingoを作成する
  while (temp_bingo.length < bingo_row * bingo_col) {
    const r_num = Util.getRandom(bingo_min, bingo_max);
    if (temp_bingo.indexOf(r_num) === -1) {
      // 値が重複していない場合はbingoに加える
      temp_bingo.push(r_num);
    } else {
      continue;
    }
  }
  console.log(temp_bingo);

  /** bingo配列 */
  const bingo = Util.convToTowArray(temp_bingo, bingo_row);

  // bingoの表示
  document.writeln(`<div class="container">`);
  document.writeln(`<table class="bingoo-table">`);

  document.writeln(`<tr class="">`);
  document.writeln(`<th class="sheet-cell">b</th>`);
  document.writeln(`<th class="sheet-cell">i</th>`);
  document.writeln(`<th class="sheet-cell">n</th>`);
  document.writeln(`<th class="sheet-cell">g</th>`);
  document.writeln(`<th class="sheet-cell">o</th>`);
  document.writeln(`</tr>`);

  // bingo配列を表示する
  for (let i = 0; i < bingo.length; i++) {
    document.writeln(`<tr class="">`);
    for (let j = 0; j < bingo[0].length; j++) {
      document.writeln(
        `<td class="sheet-cell"><div class="bingo-cell circle">${bingo[i][j]}</div></td>`
      );
    }
  }

  document.writeln(`</tr>`);
  document.writeln(`</table>`);
  document.writeln(`</div>`);

  // セルクリックイベントを追加する
  const bingo_cells = document.getElementsByClassName("bingo-cell");
  for (let i = 0; i < bingo_cells.length; i++) {
    const element = bingo_cells[i];
    element.addEventListener("click", () => {
      console.log("cell click");
      // 要素へclassを追加する
      element.classList.add("bingo-open");
    });
  }
}
