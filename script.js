//socialmediashare
//persondata
//sharebutton

const passive = document.querySelector(".person-data");
const active = document.querySelector(".social-media-share");
const btn = document.querySelector(".share-button");

btn.addEventListener("click", () => {
  if(passive.style.display = "flex") {
    active.style.display = "flex";
    passive.style.display = "none"
  }

  btn.addEventListener("click", () => {
    if(active.style.display = "flex") {
      active.style.display = "none";
      passive.style.display = "flex"
    }
  })
})



