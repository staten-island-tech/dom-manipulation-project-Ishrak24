const DOMSelectors = {
  button: document.getElementById("btn"),
  input: document.querySelector("#input"),
  box: document.getElementById("container-box"),
};

DOMSelectors.button.addEventListener("click", function () {
  const year = parseInt(document.getElementById("input").value);
  const age = 2022 - year;

  if (year > 0 && year < 2) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text">  Bulbasaur / Charmander / Squirtle  </p> 
  `
    );
  } else if (year >= 2 && year < 3) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text"> Chikorita / Cyndaquil / Totodile </p> 
  `
    );
  } else if (year >= 3 && year < 4) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text"> Treecko / Torchic / Mudkip</p> 
  `
    );
  } else if (year >= 4 && year < 5) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text"> Turtwig / Chimchar / Piplup </p> 
  `
    );
  } else if (year >= 5 && year < 6) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text"> Snivy / Tepig / Oshawott  </p> 
  `
    );
  } else if (year >= 6 && year < 7) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text"> Chespin / Fennekin / Froakie  </p> 
  `
    );
  } else if (year >= 7 && year < 8) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text">  Rowlet / Litten / Popplio </p> 
  `
    );
  } else if (year >= 8 && year < 9) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text">  Grookey / Scorbunny / Sobble </p> 
  `
    );
  }
  DOMSelectors.input.value = ``;
});
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  document.location.reload();
});
