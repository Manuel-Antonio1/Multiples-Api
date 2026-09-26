const API = 'https://api.sampleapis.com/cartoons/cartoons2D';
const container = document.querySelector(".cards-main");

const getCartoons = async () => {
    const response = await  fetch(API);
    if(!response.ok){
        throw new Error(`Error http:${response.status}`);
    }
    return  response.json();
}

const mostrar = async () => {
    try {
        const data = await getCartoons();
        const tarjetas = data.map(dibujito =>`
         <article class="card">
         <div  class="card-image-container">
            <span class="cardnumber">${dibujito.id}</span>
            <img src ="${dibujito.image}" alt ="${dibujito.name}">
         </div>
         <div class ="card-content">
            <h3>${dibujito.name}</h3>
            <span class="badge">${dibujito.year}</span>
         </div>
         </article>`
        ).join('');
        container.innerHTML = tarjetas;
    } catch (error) {
        console.log("Nose puedo obtener los dibujitos", error.message);
        container.innerHTML = `<h2>No se pudo obtener los dibujitos</h2>`
    }
}

mostrar();