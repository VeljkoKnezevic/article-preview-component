const shareButtonPassive = document.querySelector(".share-button-passive");
const shareButtonActive = document.querySelector(".share-button-active");
const passiveFooter = document.querySelector(".passive-footer");
const activeFooter = document.querySelector(".active-footer");


shareButtonPassive.addEventListener("click", () => {
  passiveFooter.style.display = "none";
  activeFooter.style.display = "flex";
})

shareButtonActive.addEventListener("click", () => {
  activeFooter.style.display = "none";
  passiveFooter.style.display = "flex";
})