class HeroSlider {
  constructor() {
    this.swiper = this._init();
  }
  _init() {
    return new Swiper(".swiper-container", {
      // Optional parameters
      direction: "horizontal", // スライド方向を指定
      loop: true, // ループ
      effect: "slide",
      // effect: "flip",
      // effect: "coverflow",
      // effect: "cube",
      // effect: "fade",
      slidesPerView: 1, // スライドの表示数

      spaceBetween: 10,
      centeredSlides: true, // true を指定するとアクティブなスライドを中央に配置

      // breakpoints
      breakpoints: {
        600: {
          slidesPerView: 1.2,
        },
      },

      // pagination
      pagination: {
        el: ".swiper-pagination",
        type: "bullets", //ページネーションの種類
        clickable: true, //クリックに反応させる
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // 自動切り替わり
      autoplay: {
        // 切り替わり間隔
        delay: 4000,
        // マウスで操作した後に切り替わりを停止するか
        disableOnInterraction: false,
      },
    });
  }
}
