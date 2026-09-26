const API = 'https://pokeapi.co/api/v2/pokemon?limit=12';
const container = document.querySelector(".cards-main");

const getPokemon = async () => {
    const resonse = await fetch(API);
    if (!resonse.ok) {
        throw new Error("Error HTTP", resonse.status);
    }
    const data= await resonse.json();

    const detalles = await Promise.all(
    data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      return await res.json();
    }));
    return detalles
    
}

const mostrardata = async () => {
    try {
        const data = await getPokemon();
        const tarjeta = data.map(pokemon => `
            <article>
            <div>
              <spam>${pokemon.id}</span>
              <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}">
            </div>
            <div>
              <h3>${pokemon.name}</h3>
              <span>Tipos :${pokemon.types.map(t =>t.type.name).join(',')}</span>
            </div>
            </article>`
        ).join('');
        container.innerHTML= tarjeta;
    } catch (error) {
        console.error("Erorr en mostrar los datos ", error);
        container.innerHTML = `<h2>No se puedo obetener los datos diculpa</h2>`;
    }
}

mostrardata();