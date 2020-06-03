document.addEventListener("DOMContentLoaded", (event) => {
    const form = document.querySelector(".main-form");

    const fromAboutInputWrapper = document.querySelector(
        ".main-form .from-about-field .input-wrapper",
    );
    const fromAboutInput = document.querySelector(
        ".main-form .from-about-field .input-wrapper input",
    );
    const fromAboutBtnsContainer = document.querySelector(
        ".main-form .from-about-field .btn-set",
    );
    const fromAboutBtns = document.querySelectorAll(
        ".main-form .from-about-field .btn-set button",
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
        });
    });

    form.addEventListener("submit", (event) => {});
});

function telMask(element) {
    const value = element.value.replace(/[^0-9]/g, "");
    element.value = value;
}
