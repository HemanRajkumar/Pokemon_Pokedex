// Sorting Region toggle
const optionMenu1 = document.querySelector(".sort_region"),
    selectBtn1 = optionMenu1.querySelector(".select_btn"),
    options1 = optionMenu1.querySelectorAll(".option"),
    sBtn_text1 = optionMenu1.querySelector(".sBtn_Text"); 

selectBtn1.addEventListener("click", () => optionMenu1.classList.toggle("active"));

options1.forEach(option => {
    option.addEventListener("click", () => {
        let selectedOption1 = option.querySelector(".option_text").innerHTML;
        sBtn_text1.innerHTML = selectedOption1;

        optionMenu1.classList.remove("active");
        sortPokemons(); 
    });
});
// Sort by Toggle
const optionMenu2 = document.querySelector(".sort_alphanumeric"),
    selectBtn2 = optionMenu2.querySelector(".select_btn"),
    options2 = optionMenu2.querySelectorAll(".option"),
    sBtn_text2 = optionMenu2.querySelector(".sBtn_Text");

selectBtn2.addEventListener("click", () => optionMenu2.classList.toggle("active"));

options2.forEach(option => {
    option.addEventListener("click", () => {
        let selectedOption2 = option.querySelector(".option_text").innerHTML;
        sBtn_text2.innerHTML = selectedOption2;

        optionMenu2.classList.remove("active");
        sortPokemons();
    });
});


const Max_Pokemon = 1025;
const listWrapper = document.querySelector(".list_wrapper");
const searchInput = document.querySelector(".search");

const notfoundmessage = document.querySelector(".not_found_message");

let allPokemons = [];

fetch(`https://pokeapi.co/api/v2/pokemon?limit=${Max_Pokemon}`)
    .then((response) => response.json())
    .then((data) => {
        allPokemons = data.results;
        displayPokemons(allPokemons);
    });

async function fetchPokemonDataBeforeRedirect(id) {
    try {
        const [pokemon, pokemonSpecies] = await Promise.all([
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json()),
            fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((res) => res.json()),
        ]);
        return true;
    } catch (error) {
        console.error("Failed to fetch Pokemon data before redirect");
    }
}

function displayPokemons(pokemon) {
    listWrapper.innerHTML = "";

    pokemon.forEach((pokemon) => {
        const pokemonId = pokemon.url.split("/")[6];
        const listItem = document.createElement("div");
        listItem.className = "list_item";
        listItem.innerHTML = `
            <div class="img_wrap">
            <img src="../Images/Pokemon/${pokemonId}.png" alt="${pokemon.name}" />
            </div>
            <div class="number_wrap">
                <p class="caption_fonts">#${pokemonId}</p>
            </div>
            <div class="name_wrap">
                <p class="caption_fonts">${pokemon.name}</p>
            </div>
        `;
        listItem.addEventListener("click", async () => {
            const success = await fetchPokemonDataBeforeRedirect(pokemonId);
            if (success) {
                window.location.href = `./detail.html?id=${pokemonId}`;
            }
        });
        listWrapper.appendChild(listItem);
    });
}

searchInput.addEventListener("keyup", handleSearch);
// Searching Function
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    let filteredPokemons;

    if (!isNaN(searchTerm) && Number.isInteger(Number(searchTerm))) {
        filteredPokemons = allPokemons.filter((pokemon) => {
            const pokemonID = pokemon.url.split("/")[6];
            return pokemonID.startsWith(searchTerm);
        });
    } else if (isNaN(searchTerm)) {
        filteredPokemons = allPokemons.filter((pokemon) =>
            pokemon.name.toLowerCase().startsWith(searchTerm)
        );
    } else {
        filteredPokemons = allPokemons;
    }

    displayPokemons(filteredPokemons);

    if (filteredPokemons.length === 0) {
        notfoundmessage.style.display = "block";
    } else {
        notfoundmessage.style.display = "none";
    }
}

// Region and sorting function
const pokemonRegions = [
    { name: 'Kanto', range: [1, 151] },
    { name: 'Johto', range: [152, 251] },
    { name: 'Hoenn', range: [252, 386] },
    { name: 'Sinnoh', range: [387, 493] },
    { name: 'Unova', range: [494, 649] },
    { name: 'Kalos', range: [650, 721] },
    { name: 'Alola', range: [722, 809] },
    { name: 'Galar', range: [810, 898] },
    { name: 'Paldea', range: [899, 1025] }
];

function sortPokemons() {
    let region = sBtn_text1.innerHTML; 
    let sortBy = sBtn_text2.innerHTML; 

    let filteredPokemons = [...allPokemons]; 

    
    if (region !== 'All') {
        const selectedRegion = pokemonRegions.find(r => r.name === region);
        if (selectedRegion) {
            const [minId, maxId] = selectedRegion.range;
            filteredPokemons = filteredPokemons.filter(pokemon => {
                const pokemonId = parseInt(pokemon.url.split("/")[6]); 
                return pokemonId >= minId && pokemonId <= maxId; // Checking the Pokémon ID if within selected range
            });
        }
    }

    // Sorting logic
    switch (sortBy) {
        case 'Lowest Number (First)':
            filteredPokemons.sort((a, b) => parseInt(a.url.split("/")[6]) - parseInt(b.url.split("/")[6]));
            break;
        case 'Highest Number (First)':
            filteredPokemons.sort((a, b) => parseInt(b.url.split("/")[6]) - parseInt(a.url.split("/")[6]));
            break;
        case '(A-Z)':
            filteredPokemons.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case '(Z-A)':
            filteredPokemons.sort((a, b) => b.name.localeCompare(a.name));
            break;
        default:
            break;
    }

    displayPokemons(filteredPokemons); // Display sorted Pokémon
}
