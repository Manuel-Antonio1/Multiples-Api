const API = 'https://ghibliapi.dev/films';
const container = document.querySelector(".cards-main");

const getGihibli = async () => {
    const response = await fetch(API);
    if(!response.ok){
        throw new Error("Error en HTTTP",response.status);
    }
    return response.json();
}

const mostrar = async () => {
    try{
    const data = await getGihibli();
    const tarjetas = data.map(pelicula => `
       <article>
         <div>
           <span>${pelicula.rease_date}</span>
           <img src="${pelicula.image}" alt="${pelicula.oriinal_title_romanised}">
         </div>
         <div>
           <h3>${pelicula.oriinal_title_romanised}</h3>
           <span>${pelicula.description}</span>
         </div>
        </article> `
    ).join('');
    container.innerHTML=tarjetas;    
   }catch(error){
     console.log("Nose puedo obtener los datos", error);
     container.innerHTML=`<h2>NO se pudo obtener los datos, disculpa</h2>`;
   }
}

mostrar();