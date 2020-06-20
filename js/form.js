document.addEventListener("DOMContentLoaded", event => {
  // Форма
  const form = document.querySelector(".block-form .callback-form");
  // Обертка поля откуда узнали о нас
  const fromAboutInputWrapper = document.querySelector(
    ".block-form .callback-form .top-row .right-side .form-field.from-about-field .input-wrapper"
  );
  // Поле откуда узнали о нас
  const fromAboutInput = document.querySelector(
    ".block-form .callback-form .top-row .right-side .form-field.from-about-field .input-wrapper input"
  );
  // Обертка кнопок
  const fromAboutBtnsContainer = document.querySelector(
    ".block-form .callback-form .top-row .right-side .form-field.from-about-field .btn-set"
  );
  // Кнопки
  const fromAboutBtns = document.querySelectorAll(
    ".modal-cases-btn"
  );
  const telElements = document.querySelectorAll(".tel-input");


  telElements.forEach((element) => {
    element.addEventListener("input", (event) => telMask(event.target));
  });

  fromAboutInput.addEventListener("focus", (event) => {
    fromAboutBtnsContainer.classList.add("hidden");
  });

  fromAboutInput.addEventListener("blur", (event) => {
    if (event.target.value.length > 0) {
      fromAboutBtnsContainer.classList.add("hidden");

      return;
    }

    fromAboutBtnsContainer.classList.remove("hidden");
  });

  fromAboutBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const isChecked = event.target.classList.contains("active");
      let whereKnow = document.getElementById('#where_know');

      whereKnow.value = btn.textContent;


      fromAboutBtns.forEach((el) => {
        el.classList.remove("active");
      });

      if (!isChecked) {
        event.target.classList.add("active");
        fromAboutInputWrapper.classList.add("hidden");

        return;
      }

      event.target.classList.remove("active");
      fromAboutInputWrapper.classList.remove("hidden");
      whereKnow.value = '';



    });
  });

  form.addEventListener("submit", (event) => {});


  //Скрипт нижней формы

  // Форма
  const CaseFrom = document.getElementById("#case_form");
  // Обертка поля откуда узнали о нас
  const WhereInputWrapper = document.getElementById("#where_input_wrapper");
  // Поле откуда узнали о нас
  const WhereInput = document.getElementById("#where_input");
  // Обертка кнопок
  const BtnsWrapper = document.getElementById("#btns_wrapper");
  // Кнопки
  const CasesBtns = document.querySelectorAll(
    ".cases-btn"
  );

  WhereInput.addEventListener("focus", (event) => {
    BtnsWrapper.classList.add("hidden");
  });

  WhereInput.addEventListener("blur", (event) => {
    if (event.target.value.length > 0) {
      BtnsWrapper.classList.add("hidden");

      return;
    }

    BtnsWrapper.classList.remove("hidden");
  });


  CasesBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const isChecked = event.target.classList.contains("active");
      WhereInput.value = btn.textContent;
      console.log(WhereInput.value);


      CasesBtns.forEach((el) => {
        el.classList.remove("active");
      });

      if (!isChecked) {
        event.target.classList.add("active");
        WhereInputWrapper.classList.add("hidden");

        return;
      }

      event.target.classList.remove("active");
      WhereInputWrapper.classList.remove("hidden");
      WhereInput.value = '';

    });
  });

  CaseFrom.addEventListener("submit", (event) => {});


});

function telMask(element) {
  const value = element.value.replace(/[^0-9]/g, "");
  element.value = value;
}