const buttons = document.getElementsByTagName("button");
const paragraphs = document.getElementsByTagName("p");
const images = document.getElementsByTagName("img");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    for (let k = 0; k < paragraphs.length; k++) {
      if (k === i) {
        paragraphs[k].style.display = "block";
        images[k + 1].src = "./images/icon-minus.svg";
      } else {
        paragraphs[k].style.display = "none";
        images[k + 1].src = "./images/icon-plus.svg";
      }
    }
  });
}
