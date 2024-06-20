const hoteis = [
    {
        destino: "Paris",
        nome: "Hotel Eiffel Tower",
        imagem: "eiffel.jpg",
        preco: 150,
        descricao: "Localizado ao lado da Torre Eiffel, este hotel oferece uma vista deslumbrante da cidade luz."
    },
    {
        destino: "Nova York",
        nome: "Central Park Hotel",
        imagem: "park.jpg",
        preco: 200,
        descricao: "Situado em frente ao Central Park, este hotel oferece conforto e comodidade no coração de Manhattan."
    },
    {
        destino: "Tóquio",
        nome: "Tokyo Skyline Hotel",
        imagem: "tokyo.jpg",
        preco: 180,
        descricao: "Com vista para o skyline de Tóquio, este hotel é perfeito para quem deseja explorar a cidade moderna."
    }
];

function exibirHoteis() {
    const hotelListContainer = document.getElementById('hotel-list');

    hoteis.forEach(hotel => {
        const hotelCard = document.createElement('div');
        hotelCard.classList.add('hotel');

        hotelCard.innerHTML = `
            <h2>${hotel.nome}</h2>
            <img src="${hotel.imagem}" alt="${hotel.nome}">
            <p><strong>Destino:</strong> ${hotel.destino}</p>
            <p><strong>Preço por noite:</strong> R$ ${hotel.preco.toFixed(2)}</p>
            <p>${hotel.descricao}</p>
        `;

        hotelListContainer.appendChild(hotelCard);
    });
}

document.addEventListener('DOMContentLoaded', exibirHoteis);