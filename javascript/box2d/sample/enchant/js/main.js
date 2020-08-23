enchant();

window.onload = function () {
  var game = new Core(320, 320);

  //背景色の設定
  game.rootScene.backgroundColor = "#FFFFCC";

  //ゲーム素材読み込み
  game.preload(
    "https://cdn.rawgit.com/wise9/enchant.js/master/images/map2.png",
    "https://cdn.rawgit.com/wise9/enchant.js/master/images/icon0.png"
  );

  //ブロックの生成クラス
  var Wall = Class.create(PhyBoxSprite, {
    initialize: function (x, y) {
      PhyBoxSprite.call(
        this,
        16,
        16,
        enchant.box2d.DYNAMIC_SPRITE,
        1.0,
        0.5,
        0.3,
        true
      );
      this.image =
        game.assets[
          "https://cdn.rawgit.com/wise9/enchant.js/master/images/map2.png"
        ];
      this.frame = 1;
      this.x = x;
      this.y = y;
      game.rootScene.addChild(this);
    },
  });

  //床の生成クラス
  var Floor = Class.create(PhyBoxSprite, {
    initialize: function (x, y) {
      PhyBoxSprite.call(
        this,
        16,
        16,
        enchant.box2d.STATIC_SPRITE,
        0,
        1.0,
        0,
        false
      );
      this.image =
        game.assets[
          "https://cdn.rawgit.com/wise9/enchant.js/master/images/map2.png"
        ];
      this.x = x;
      this.y = y;
      game.rootScene.addChild(this);
    },
  });

  //豚キャラの生成クラス
  var Pig = Class.create(PhyCircleSprite, {
    initialize: function (x, y) {
      PhyCircleSprite.call(
        this,
        8,
        enchant.box2d.DYNAMIC_SPRITE,
        1.5,
        1.0,
        0.3,
        true
      );
      this.image =
        game.assets[
          "https://cdn.rawgit.com/wise9/enchant.js/master/images/icon0.png"
        ];
      this.frame = 22;
      this.x = x;
      this.y = y;
      game.rootScene.addChild(this);
      this.ontouchstart = function () {
        this.applyImpulse(new b2Vec2(4, -1.5));
      };
    },
  });

  //メインループ
  game.onload = function () {
    var world = new PhysicsWorld(0, 9.8);

    //床の作成
    for (var i = 0; i < 320; i += 16) {
      var floor = new Floor(i, 304);
    }

    //豚キャラの処理
    var pig = new Pig(50, 200);

    //壁の作成
    for (var i = 280; i > 220; i -= 20) {
      var wall = new Wall(200, i);
    }
    for (var i = 280; i > 180; i -= 20) {
      var wall = new Wall(250, i);
    }

    //物理エンジン処理
    game.rootScene.onenterframe = function () {
      world.step(game.fps);
    };
  };

  game.start();
};
