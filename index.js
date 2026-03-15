
//ai generated code for mobile menu toggle
const button = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");

button.addEventListener("click", () => {
  menu.classList.toggle("active");
});

//form submission (AI assisted)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");

  if(form){
     form.addEventListener("submit", function(event) {
    event.preventDefault();

    let valid = true;

    // hide all errors first
    document.querySelectorAll(".error").forEach(span => span.style.display = "none");

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const position = document.getElementById("position");
    const experience = document.getElementById("experience");

    const nameError = document.querySelector('.error[data-error-for="name"]');
    const emailError = document.querySelector('.error[data-error-for="email"]');
    const positionError = document.querySelector('.error[data-error-for="position"]');
    const experienceError = document.querySelector('.error[data-error-for="experience"]');

    if (name.value.trim() === "") {
      nameError.style.display = "inline";
      valid = false;
    }

    if (!email.value.includes("@")) {
      emailError.style.display = "inline";
      valid = false;
    }

    if (!/^[A-Za-z\s]+$/.test(position.value.trim())) {
      positionError.style.display = "inline";
      valid = false; 
    }

    if (!/^[A-Za-z\s]+$/.test(experience.value.trim())) {
      experienceError.style.display = "inline";
      valid = false; 
    }

    if (valid) {
      alert("Form submitted!");
      form.reset();
    }
  });
  }
});

//dynamic content generation (AI assisted)

const games = [
  {
    class: "game",
    title: "Duck City 2",
    image: "Game1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur commodo."
  },
  {
    class: "game",
    title: "Robot Battle",
    image: "Game2.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur commodo."
  },
  {
    class: "game",
    title: "Flight Simulator",
    image: "Game3.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur commodo."
  },
  {
    class: "game",
    title: "Block City",
    image: "Game4.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur commodo."
  },
  {
    class: "game",
    title: "Block City 2",
    image: "Game4.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur commodo."
  },
  {
    class: "game",
    title: "Block City 3",
    image: "Game4.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur commodo."
  }
];

//generating games (AI assisted)

function renderGames(gameList){

  const gallery = document.getElementById("gallery");

  if (!gallery) return;

  gallery.innerHTML = "";

  gameList.forEach(game => {
    gallery.innerHTML += `
      <div class="box1">
          <img src="${game.image}" alt="${game.title}">
      </div>

      <div class="box1 text">
          <h2>${game.title}</h2>
          <p>${game.description}</p>
      </div>
    `;
  });

}

renderGames(games);

//filtering search

function filterGames(searchText){

  const filtered = games.filter(game =>
    game.title.toLowerCase().includes(searchText.toLowerCase())
  );

  renderGames(filtered);
}

const search = document.getElementById("search");

if (search){
    search.addEventListener("input", () => {
    filterGames(search.value);
  });
}

//API call

const pokemonCard = document.querySelector('#pokemon-card');
const pokemonImg = document.querySelector('#pokemon-img');
const pokemonName = document.querySelector('#pokemon-name');
const pokemonType = document.querySelector('#pokemon-type');
const maxPokemon = 1025;



    const randomPokemonId = Math.floor(Math.random() * maxPokemon) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
        .then((response) => response.json())
        .then((data) => {
          if(pokemonImg){
            pokemonImg.src = data.sprites.front_default;
            pokemonName.textContent = `Name: ${data.name}`;
            pokemonType.textContent = `Type: ${data.types[0].type.name}`;
            pokemonCard.style.display = 'block';
        }
        })
        .catch((error) => {
            console.error('Error fetching Pokémon:', error);
        });


        



