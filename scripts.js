//modal for nnow. convert to React soon.
const catbutton = document.getElementById("catbutton");
const closebutton = document.getElementById("closebutton");
const modal = document.getElementById("modal");

catbutton.addEventListener("click", () => {
    modal.classList.add("active");
});

closebutton.addEventListener("click", () => {
    modal.classList.remove("active");
});
