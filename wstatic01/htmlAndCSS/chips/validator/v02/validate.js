init();

function init() {
  // domを取得する
  const $input = document.querySelector(".validate-target");
  const $submitBtn = document.querySelector(".submitBtn");

  $input.addEventListener("input", function (event) {
    const $target = event.currentTarget;

    if ($target.checkValidity()) {
      // チェックOK
      console.log("validate OK !!!");
      $submitBtn.removeAttribute("disabled");
    } else {
      // チェックNG
      console.log("validate NG");
      console.log("NG内容:", $target.validity);
      $submitBtn.setAttribute("disabled", true);
    }
  });
}
