const btns = document.querySelectorAll(".tell-link");

btns.forEach((btn) => {
    btn.addEventListener("mousemove", (event) => {
        const target = event.target.getBoundingClientRect();
        const x = event.clientX - target.left;
        const y = event.clientY - target.top;
        event.target.style.setProperty("--but__top", `${y}px`);
        event.target.style.setProperty("--but__left", `${x}px`);
        event.target.classList.add("hovered");
    });

    btn.addEventListener("mouseleave", (event) => {
        const target = event.target.getBoundingClientRect();
        const x = event.clientX - target.left;
        const y = event.clientY - target.top;
        event.target.style.setProperty("--but__top", `${y}px`);
        event.target.style.setProperty("--but__left", `${x}px`);
        event.target.classList.remove("hovered");
    });
});
