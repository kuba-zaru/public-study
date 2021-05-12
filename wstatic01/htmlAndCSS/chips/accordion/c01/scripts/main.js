document.addEventListener("DOMContentLoaded", function () {
  //   const btn01 = document.querySelector(".btn01");
  //   btn01.addEventListener(judgeClickEventType(), () =>
  //     toggleClass(".item_container", "inview")
  //   );

  const aBtn1 = document.querySelectorAll(
    // ".accordion-1 .accordion-1__button"
    ".accordion-1 .accordion-1__item"
  );
  aBtn1.forEach((item, idx) => {
    let className = ".item-" + (idx + 1);
    item.addEventListener(judgeClickEventType(), () =>
      toggleClassToClass(".accordion-1 " + className, "open")
    );
  });

  const aBtn2 = document.querySelectorAll(".accordion-2 .accordion-2__item");
  aBtn2.forEach((item, idx) => {
    let className = ".item-" + (idx + 1);
    item.addEventListener(judgeClickEventType(), () =>
      toggleClassToClass(".accordion-2 " + className, "open")
    );
  });
});
