document.addEventListener("DOMContentLoaded", function () {
  const mmBtn = document.querySelector(".mobile-menu-button > button");
  mmBtn.addEventListener(judgeClickEventType(), () =>
    toggleClass("#container", "menu-open")
  );
});

// function manuButtonHandle() {
//   console.log("manuButtonHandle");
// }
