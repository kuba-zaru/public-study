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
  // 要素を作成して追加する
  for (let row = 0; row < 5; row++) {
    const tr = document.createElement("tr");
    for (let col = 0; col < 5; col++) {
      const td = document.createElement("td");
      td.classList.add("sheet-cell");
      const div = document.createElement("div");
      div.classList.add("bingo-cell");
      div.classList.add("circle");
      div.textContent = bingo[row][col];
      td.appendChild(div);
      tr.appendChild(td);
    }
    const tbody = document.getElementById("bingo-body");
    tbody.appendChild(tr);
  }

  // セルクリックイベントを追加する
  const bingo_cells = document.getElementsByClassName("bingo-cell");
  for (let i = 0; i < bingo_cells.length; i++) {
    const element = bingo_cells[i];
    element.addEventListener("click", () => {
      console.log("cell click !");
      // 要素へclassを追加する
      element.classList.add("bingo-open");
      const parent = element.parentNode;
      parent.style.backgroundColor = "#ff0";
      parent.style.transition = "0.5s";
    });
  }
}
