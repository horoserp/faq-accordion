const buttons = document.getElementsByTagName("button");
const paragraphs = document.getElementsByTagName("p");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    for (let k = 0; k < paragraphs.length; k++) {
      if (k === i) {
        paragraphs[k].style.display = "block";
      } else {
        paragraphs[k].style.display = "none";
      }
    }
  });
}
