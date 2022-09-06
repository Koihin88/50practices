const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
    search.classList.toggle("active");
    if (search.classList.contains("active")) {
        input.focus();
    } else {
        input.addEventListener("focusout", () => {
            input.style.background("");
        });
    }
});
