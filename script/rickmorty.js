const API = 'https://rickandmortyapi.com/api/character';
const container = document.querySelector(".cards-main");

const getRickMorty  = async () => {
    const response = await fetch(API);
    if (!response.ok) {
        throw new Error("Error HTTP", response.status);
    }
    return response.json();
}

const mostrardata = async () => {
    try{
    const data =  await getRickMorty();
    const tarjetas = data.results.map(personaje =>`
        
        
    `).join("");
    container.innerHTML= tarjetas;
    }catch(error){
        console.log('No se pudo obtener los datos', error);
        container.innerHTML= `<h2>No se puedo obetener los datos</h2>`
    }
}

mostrardata();