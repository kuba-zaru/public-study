document.addEventListener("DOMContentLoaded", function () {
  const btn01 = document.querySelector(".btn01");
  btn01.addEventListener(judgeClickEventType(), () =>
    toggleClass(".item_container", "inview")
  );

  const btn02 = document.querySelector(".btn02");
  btn02.addEventListener(judgeClickEventType(), () =>
    toggleClass(".item_container2", "inview")
  );

  const btn03 = document.querySelector(".btn03");
  btn03.addEventListener(judgeClickEventType(), () =>
    toggleClass(".item_container3", "inview")
  );
});
