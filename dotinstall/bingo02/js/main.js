"use strict";

{
  /**
   * bingoの縦一列を作成する
   * @param {*} col 作成したい列番号
   * @return {*} 作成したcolumn
   */
  function createColumn(col) {
    const source = [];
    const column = [];

    for (let i = 0; i < 15; i++) {
      source[i] = i + 1 + 15 * col;
    }
    for (let i = 0; i < 5; i++) {
      column[i] = source.splice(Util.getRandom(0, source.length - 1), 1)[0];
    }
    return column;
  }

  // bingoのひな形を作成する
  const columns = [];
  for (let i = 0; i < 5; i++) {
    columns[i] = createColumn(i);
  }
  columns[2][2] = "FREE";

  // bingoの縦と行を入れ替える
  const bingo = [];
  for (let row = 0; row < 5; row++) {
    bingo[row] = [];
    for (let col = 0; col < 5; col++) {
      bingo[row][col] = columns[col][row];
    }
  }

  // debug console 表形式でconsoleに出力する
  console.table(bingo);

  // bingoを描画する
  for (let row = 0; row < 5; row++) {
    const tr = document.createElement("tr");
    for (let col = 0; col < 5; col++) {
      const td = document.createElement("td");
      td.textContent = bingo[row][col];
      tr.appendChild(td);
    }
    document.querySelector("tbody").appendChild(tr);
  }
}
