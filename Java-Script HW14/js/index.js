const request = async (url) => {
    const response = await fetch(url);
    if(response.ok){
        return response.json();
    } else {
        throw new Error(`Error fetching data from ${url}`);
    }
}

function getCharacters(url) {
    request(url).then(data => {
        renderCharacters(data.results);
        updatePagination(data.info.next, data.info.prev);
    }).catch(error => {
        console.error(error.message);
    });
}

function renderCharacters(characters) {
    const characterContainer = document.querySelector(".character-list");
    characterContainer.innerHTML = ""; 
    characters.forEach(async character => {
        const episode = await getEpisode(character.episode[0]);
        const characterCard = `
            <article class="character-card">
                <div class="character-img">
                    <img src="${character.image}" alt="${character.name}">
                </div>
                <div class="character-details">
                    <h2>${character.name}</h2>
                    <p>${character.status} - ${character.species}</p>
                    <p><strong>Last known location:</strong> ${character.location.name}</p>
                    <p><strong>First seen in:</strong> ${episode.name}</p>
                </div>
            </article>`;
        characterContainer.insertAdjacentHTML("beforeend", characterCard);
    });
}

function updatePagination(next, prev) {
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");

    nextButton.disabled = !next;
    prevButton.disabled = !prev;

    if (next) {
        nextButton.onclick = () => getCharacters(next);
    }
    if (prev) {
        prevButton.onclick = () => getCharacters(prev);
    }
}

async function getEpisode(url) {
    const episode = await request(url);
    return episode;
}

getCharacters("https://rickandmortyapi.com/api/character");