const API = 'https://api.disneyapi.dev/character';
const container = document.querySelector(".cards-main");

const getDisney = async () => {
    const response = await fetch(API);
    if(!response.ok){
        throw new Error("Error http", response.status);
    }
    return response.json();
}

const mostrarFilmaciones = async () => {
    try{
    const peliculas = await getDisney();
    const tarjetas = peliculas.data.map(film =>`
        <article>
            <div class="">
                <span>${film._id}</span>
                <img src="${film.imageUrl}" alt="${film.films}">
            </div>
            <div class="">
                <h3>${film.name}</h3>
                <span>${film.films}</span>
            </div>
        </article>
        `
    ).join('');
    container.innerHTML= tarjetas;
    }catch(error){
        console.log(`No se pudo obtener los datos`, error.message);
       container.innerHTML = '<h2>No se pudo obtener los datos, disculpa</h2>';

    }
}
getDisney()
mostrarFilmaciones();