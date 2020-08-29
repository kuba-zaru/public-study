"use strict";

{
  document.write("<p>オブジェクト</p>");

  // 配列の定義
  const point = {
    x: 100,
    y: 15,
  };

  document.writeln("<p>■オブジェクトの表示</p>");
  console.log(point);
  document.writeln(`<p>point = ${point}</p>`);

  document.writeln("<p>■オブジェクトの参照</p>");
  document.writeln(`<p>point.x = ${point.x}</p>`);
  document.writeln(`<p>point[y] = ${point["y"]}</p>`);

  document.writeln("<p>■プロパティの追加</p>");
  point.z = 20;
  document.writeln(`<p>point.z = ${point.z}</p>`);

  document.writeln("<p>■プロパティの削除 delete</p>");
  delete point.z;
  document.writeln(`<p>point.z = ${point.z}</p>`);

  document.writeln("<p>■オブジェクトの結合</p>");
  const otherProps = {
    r: 4,
    color: "red",
    ...point,
  };
  document.writeln(`<p>otherProps.x = ${otherProps.x}</p>`);

  document.writeln("<p>■オブジェクトの複製(参照)</p>");
  const { x, ...otherProps2 } = otherProps;
  document.writeln(`<p>x = ${x}</p>`);
  document.writeln(`<p>otherProps2.y = ${otherProps2.y}</p>`);

  document.writeln("<p>■keys</p>");
  const keys = Object.keys(point);
  keys.forEach((key) => {
    document.writeln(`<p> key : value = ${key} : ${point[key]}</p>`);
  });
}
