const hamburguerButton = document.querySelector("#hamburguerButton");
const closeButton = document.querySelector("#closeButton");

const mobileMenu = document.querySelector("#mobileMenu");

hamburguerButton.addEventListener("click", function () {
    mobileMenu.classList.add("flex");
});

closeButton.addEventListener("click", function () {
    mobileMenu.classList.remove("flex");
})