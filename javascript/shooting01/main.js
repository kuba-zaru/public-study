/** ゲームスピード 1000/60で60FPS  */
const GAME_SPEED = 1000 / 60;

/** 画面サイズ */
const SCREEN_W = 180;
/** 画面サイズ */
const SCREEN_H = 320;

/** キャンバスサイズ */
const CANVAS_W = SCREEN_W * 2;
/** キャンバスサイズ */
const CANVAS_H = SCREEN_H * 2;

/** フィールドサイズ */
const FIELD_W = SCREEN_W * 2;
/** フィールドサイズ */
const FIELD_H = SCREEN_H * 2;

/** キャンバス */
const can = document.getElementById("can");
/** context */
const con = can.getContext("2d");
can.width = CANVAS_W;
can.height = CANVAS_H;

// 星の数
const STR_MAX = 300;

// フィールド(仮想画面)
let vcan = document.createElement("canvas");
const vcon = vcan.getContext("2d");
vcan.width = FIELD_W;
vcan.height = FIELD_H;

// カメラ
let camera_x = 0;
let camera_y = 0;

/** 星 */
let star = [];

/** キーボードの状態 */
let key = [];

/**
 * onkeydown
 * @param {*} e
 */
document.onkeydown = function (e) {
  key[e.keyCode] = true;
};

/**
 * onkeyup
 * @param {*} e
 */
document.onkeyup = function (e) {
  key[e.keyCode] = false;
};

/**
 * Player
 */
class Jiki {
  constructor() {
    this.x = FIELD_W / 4;
    this.y = FIELD_H / 4;
    this.anime = 0;
    this.speed = 2;
  }

  /**
   * 更新
   */
  update() {
    if (key[37]) {
      // 左
      this.x -= this.speed;
    } else if (key[39]) {
      // 右
      this.x += this.speed;
    }
    if (key[38]) {
        // 左
        this.y -= this.speed;
      } else if (key[40]) {
        // 右
        this.y += this.speed;
      }
    }

  /**
   * 描画
   */
  draw() {
    drawSprite(2 + this.anime, this.x, this.y);
  }
}
let jiki = new Jiki();

/** 画像 sprite.png */
const spriteImage = new Image();
spriteImage.src = "sprite.png";

/** スプライト */
class Sprite {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}

/** スプライト */
let sprite = [
  new Sprite(0, 0, 22, 42),
  new Sprite(23, 0, 33, 42),
  new Sprite(57, 0, 43, 42),
  new Sprite(101, 0, 33, 42),
  new Sprite(135, 0, 21, 42),
];

/**
 * スプライトを描画する
 * @param {*} snum
 * @param {*} x
 * @param {*} y
 */
function drawSprite(snum, x, y) {
  const sx = sprite[snum].x;
  const sy = sprite[snum].y;
  const sw = sprite[snum].w;
  const sh = sprite[snum].h;

  // 画像の中央座標を求める
  const px = x - sw / 2;
  const py = y - sh / 2;

  // 画面外は描画しない
  if (
    px + sw < camera_x ||
    px - sw / 2 >= camera_x + SCREEN_W ||
    py + sh < camera_y ||
    py - sh / 2 >= camera_y + SCREEN_H
  ) {
    return;
  }
  vcon.drawImage(spriteImage, sx, sy, sw, sh, px, py, sw, sh);
}

/**
 * 乱数生成する(整数)
 * @param {number} min 生成する乱数の最大値
 * @param {number} max 生成する乱数の最小値
 */
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 背景の星
 */
class Star {
  constructor() {
    this.x = rand(0, FIELD_W);
    this.y = rand(0, FIELD_H);
    this.vx = 0;
    this.vy = rand(30, 100) / 256;
    this.sz = rand(1, 2);
  }

  /**
   * 描画
   */
  draw() {
    const x = this.x;
    const y = this.y;

    // 画面外は描画しない
    if (
      x < camera_x ||
      x >= camera_x + SCREEN_W ||
      y < camera_y ||
      y >= camera_y + SCREEN_H
    ) {
      return;
    }

    // 色の設定
    vcon.fillStyle = rand(0, 2) != 0 ? "#66f" : "#8af";
    vcon.fillRect(x, y, this.sz, this.sz);
  }

  /**
   * 更新
   */
  update() {
    // 座標の更新を行う
    this.x += this.vx;
    this.y += this.vy;
    // フィールドの下部に達した場合
    if (this.y > FIELD_H) {
      this.y = 0;
      this.x = rand(0, FIELD_W);
    }
  }
}

/**
 * 初期化
 */
function gameInit() {
  // 星の初期化
  for (let i = 0; i < STR_MAX; i++) {
    star[i] = new Star();
  }
}

// gameLoop run
setInterval(gameLoop, GAME_SPEED);

/**
 * ゲームループ
 */
function gameLoop() {
  // 移動
  for (let i = 0; i < STR_MAX; i++) {
    star[i].update();
  }

  jiki.update();

  // ----- 描画 -----

  // 背景の描画
  vcon.fillStyle = "black";
  vcon.fillRect(0, 0, SCREEN_W, SCREEN_H);
  for (let i = 0; i < STR_MAX; i++) {
    star[i].draw();
  }

  jiki.draw();

  // aaa
  con.drawImage(
    vcan,
    camera_x,
    camera_y,
    SCREEN_W,
    SCREEN_H,
    0,
    0,
    CANVAS_W,
    CANVAS_H
  );
}

/**
 * onload
 */
window.onload = function () {
  gameInit();
};
