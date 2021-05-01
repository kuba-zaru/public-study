// ランディングページの一番上に表示する画像
// 一番上に表示する画像はヒーローイメージとか呼ばれるらしい
class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
  }

  _initSwiper() {
    return new Swiper(this.el, {
      // Optional parameters
      //   direction: "vertical",
      loop: true,
      // マウスカーソルをグラブにする
      grabCursor: true,
      //   effect: "fade",
      // 3dっぽいスライダー
      effect: "coverflow",
      // 中央ぞろえ
      centeredSlides: true,
      // viewへの表示枚数
      slidesPerView: 1.2,
      // 画像が自動で切り替わる際のスピード
      speed: 1000,
      // brakepoint
      breakpoints: {
        // 1024以上になった場合の設定
        1024: {
          // 画像を2枚にする
          slidesPerView: 2,
        },
      },
      // // 自動切り替わり
      // autoplay: {
      //   // 切り替わり間隔
      //   delay: 4000,
      //   // マウスで操作した後に切り替わりを停止するか
      //   disableOnInterraction: false,
      // },
    });
  }

  // 自動切り替わりの開始
  start(options = {}) {
    options = Object.assign(
      {
        delay: 4000,
        disableOnInterraction: false,
      },
      options
    );
    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }

  stop() {
    this.swiper.autoplay.stop();
  }
}
