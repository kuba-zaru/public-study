// call function
validate_form();

/**
 * 入力チェックを行う
 * @returns
 */
function validate_form() {
  // 対象のdomを取得する
  const $inputs = document.querySelectorAll(".validate-target");
  const $form = document.querySelector(".validate-form");

  if (!$form) {
    // formが存在しない場合はreturn
    return;
  }

  for (const $input of $inputs) {
    // add event
    $input.addEventListener("input", function (event) {
      const $target = event.currentTarget;
      const $feedback = $target.nextElementSibling;

      activateSubmitBtn($form);

      if (!$feedback.classList.contains("invalid-feedback")) {
        // 結果表示欄が存在しない場合はreturn
        return;
      }

      if ($target.checkValidity()) {
        // チェックOK
        $target.classList.add("is-valid");
        $target.classList.remove("is-invalid");

        $feedback.textContent = "";
      } else {
        // チェックNG
        $target.classList.add("is-invalid");
        $target.classList.remove("is-valid");

        // 結果表示欄のtextを設定する
        if ($target.validity.valueMissing) {
          $feedback.textContent = "値の入力が必須です。";
        } else if ($target.validity.tooShort) {
          $feedback.textContent =
            $target.minLength +
            "文字以上で入力してください。現在の文字数は" +
            $target.value.length +
            "文字です。";
        } else if ($target.validity.tooLong) {
          $feedback.textContent =
            $target.maxLength +
            "文字以下で入力してください。現在の文字数は" +
            $target.value.length +
            "文字です。";
        } else if ($target.validity.patternMismatch) {
          $feedback.textContent = "半角英数字で入力してください。";
        }
      }
    });
  }

  activateSubmitBtn($form);
}

/**
 * submitボタンの活性／非活性を制御する
 * @param {*} $form
 */
function activateSubmitBtn($form) {
  const $submitBtn = $form.querySelector('[type="submit"]');

  if ($form.checkValidity()) {
    // チェックOK
    $submitBtn.removeAttribute("disabled");
  } else {
    // チェックNG
    $submitBtn.setAttribute("disabled", true);
  }
}
