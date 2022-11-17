const DOMSelectors = {
  button: document.getElementById("btn"),
  input: document.querySelector("#input"),
  box: document.getElementById("container-box"),
  Img: document.getElementById("Img"),
};

DOMSelectors.button.addEventListener("click", function () {
  const gen = parseInt(document.getElementById("input").value);

  if (gen > 0 && gen < 2) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text">  Bulbasaur / Charmander / Squirtle  </p> 
      <img src="https://pvplive.net/wp-content/uploads/2021/01/2x1_PokemonPRBYPoll_v03.ad0fb582e7aa96d0b609fd9e3453fc3c79ec3364-7245868.jpg" class="myImage"alt="">
  `
    );
  } else if (gen >= 2 && gen < 3) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text"> Chikorita / Cyndaquil / Totodile </p> 
      <img src="https://staticg.sportskeeda.com/editor/2021/01/64826-16107376935625.png" class="myImage"alt="">
  `
    );
  } else if (gen >= 3 && gen < 4) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text"> Treecko / Torchic / Mudkip</p> 
      <img src="https://pbs.twimg.com/media/EelJwODXgAIgQ7D.png" class="myImage"alt="">
  `
    );
  } else if (gen >= 4 && gen < 5) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text"> Turtwig / Chimchar / Piplup </p> 
      <img src="https://i0.wp.com/pokejungle.net/wp-content/uploads/2022/02/SInnoh-Starters-100.jpg?resize=588%2C392&ssl=1" class="myImage"alt="">
  `
    );
  } else if (gen >= 5 && gen < 6) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text"> Snivy / Tepig / Oshawott  </p> 
      <img src="https://png.pngitem.com/pimgs/s/31-310945_pokemon-go-gen-5-starters-hd-png-download.png" class="myImage"alt="">
  `
    );
  } else if (gen >= 6 && gen < 7) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text"> Chespin / Fennekin / Froakie  </p> 
      <img src="https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0MzY1MzY4ODU5NTAyMjE0/best-looking-shiny-pokemon-generation-6.jpg" class="myImage"alt="">
  `
    );
  } else if (gen >= 7 && gen < 8) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text">  Rowlet / Litten / Popplio </p> 
      <img src="http://pre01.deviantart.net/0061/th/pre/f/2016/131/7/f/_wallpaper__pokemon_sun_moon_starters_by_arkeis_pokemon-da2576v.jpg" class="myImage"alt="">
  `
    );
  } else if (gen >= 8 && gen < 9) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text">  Grookey / Scorbunny / Sobble </p> 
      <img src="https://cdn.mos.cms.futurecdn.net/gPhcdyx5Xx7gEyxmHsCjd5.jpg" class="myImage"alt="">
  `
    );
  } else if (gen >= 9 && gen < 10) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text">  Sprigatito / Fuecoco / Quaxly </p> 
      <img src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2022/03/Sprigatito-Fuecoco-And-Quaxly-In-Pokemon-Scarlet-And-Pokemon-Violet-3.jpg" class="myImage"alt="">
  `
    );
  } else if (gen > 9) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p id="text">  I'm not a time traveller I don't know </p> 
      <img src="https://external-preview.redd.it/FI0F_t28Rq4uzX9DAOezToFph-z9QEtPyrCrNcs3a3o.jpg?auto=webp&s=035732f0d05692726548717cd45ec6af7ed645e6" class="myImage"alt="">
  `
    );
  }
  DOMSelectors.input.value = ``;
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  document.location.reload();
});
