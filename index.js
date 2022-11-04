const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("big-black-box"),
  points: document.querySelectorAll(".point"),
};

function backgoundAndText(background, text) {
  backgound.style.backgroundColor = "red";
  text.textContent = "This is now a bigger red box";
  text.style.fontSize = "40px";
}

DOMSelectors.button.addEventListener("click", function () {
  backgoundAndText(DOMSelectors.box, DOMSelectors.text);
});
