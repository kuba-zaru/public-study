document.addEventListener("DOMContentLoaded", function () {
  const aBtn1 = document.querySelectorAll(".accordion-1 .accordion-1__item");
  aBtn1.forEach((item, idx) => {
    let className = ".item-" + (idx + 1);
    item.addEventListener(judgeClickEventType(), () =>
      toggleClassToClass(".accordion-1 " + className, "open")
    );
  });
});
