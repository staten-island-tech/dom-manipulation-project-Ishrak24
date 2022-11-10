const DOMSelectors = {
  button: document.getElementById("btn"),
  input: document.querySelector("#input"),
  box: document.getElementById("container-box"),
};

DOMSelectors.button.addEventListener("click", function () {
  const gen = parseInt(document.getElementById("input").value);

  if (gen > 0 && gen < 2) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text">  Bulbasaur / Charmander / Squirtle  </p> 
  `
    );
  } else if (gen >= 2 && gen < 3) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text"> Chikorita / Cyndaquil / Totodile </p> 
  `
    );
  } else if (gen >= 3 && gen < 4) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text"> Treecko / Torchic / Mudkip</p> 
  `
    );
  } else if (gen >= 4 && gen < 5) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text"> Turtwig / Chimchar / Piplup </p> 
  `
    );
  } else if (gen >= 5 && gen < 6) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text"> Snivy / Tepig / Oshawott  </p> 
  `
    );
  } else if (gen >= 6 && gen < 7) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text"> Chespin / Fennekin / Froakie  </p> 
  `
    );
  } else if (gen >= 7 && gen < 8) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text">  Rowlet / Litten / Popplio </p> 
  `
    );
  } else if (gen >= 8 && gen < 9) {
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
