const modal = document.getElementById("modal");

document.getElementById("open-modal").addEventListener("click", () => {
  modal.classList.remove("modal-hide");
  modal.classList.add("modal-show");
});


[...document.getElementsByClassName("close")].forEach((item) => {
  item.addEventListener("click", () => {
    modal.classList.remove("modal-show");
    modal.classList.add("modal-hide");
  });
});
