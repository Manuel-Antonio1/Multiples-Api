const APIRICKMORTY ='https://rickandmortyapi.com/api/character';


const APIPOKEMON = 'https://pokeapi.co/api/v2/pokemon/pikachu';

const fetchData = async (url) =>{
    const response = await fetch(url);
    if(!response.ok){
        throw new Error(`Error http :${response.status}`);
    }
    return response.json();
}

