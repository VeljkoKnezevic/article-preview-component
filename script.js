const passive = document.querySelector(".main__passive");
const active = document.querySelector(".main__active");
const button = document.querySelector(".main__share");

button.addEventListener("click", () => {
  if (passive.style.display === "none" || passive.style.display === "") {
    active.style.display = "none";
    passive.style.display = "flex";
  } else if (active.style.display === "none" || active.style.display === "") {
    passive.style.display = "none";
    active.style.display = "flex";
  }
});
