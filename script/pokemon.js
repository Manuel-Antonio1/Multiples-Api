const API = 'https://pokeapi.co/api/v2/pokemon/pikachu';
const container = document.querySelector(".cards-main");

const getPokemon = async () => {
    const resonse = await fetch(API);
    if (!resonse.ok) {
        throw new Error("Error HTTP", resonse.status);
    }
    return resonse.json();
}

const mostrardata = async () => {
    try {
        const data = await getPokemon();
        const tarjeta = data.map(pokemon => `
            <article>
            <div>
              <spam>${pokemon.id}</span>
              <img src="${pokemon.sprites.other['official-artwork'].front_default}">
            </div>
            <div>
              <h3>${pokemon.name}</h3>
              <span>Tipos :${tipos}</span>
            </div>
            </article>`
        ).join('');
    } catch (error) {
        console.log("Erorr en mostrar los datos ", error);
        container.innerHTML = `<h2>No se puedo obetener los datos diculpa</h2>`;
    }
}

mostrardata();