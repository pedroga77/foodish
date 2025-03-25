'use strict'


async function pesquisarFotos(nomePrato) {

    const categorias = {
        'Arroz': 'rice', 
        'Pizza': 'pizza',  
        'Hamburgueres': 'burger', 
        'Sobremesas': 'dessert', 
        'Frango': 'butter-chicken', 
        'Chamuça': 'samosa',
    };

    
    const categoria = categorias[nomePrato] || 'general'; 
    
    const url = `https://foodish-api.com/api/images/${categoria}`;
    
    const response = await fetch(url);
    const data = await response.json();
    

    return data.image || 'img/default.jpg'; 
}

const personagens = [
    { nome: 'Arroz', imagem: 'arroz.jpg', descricao: '', cor: 'rgb(0, 0, 0)' },
    { nome: 'Chamuça', imagem: 'arroz_indiano.jpg', descricao: '', cor: 'rgb(0,0,0)' },
    { nome: 'Hamburgueres', imagem: 'hamburguer.jpg', descricao: '', cor: 'rgb(0, 0, 0)' },
    { nome: 'Sobremesas', imagem: 'sobremesas.jpg', descricao: '', cor: 'rgb(0, 0, 0)' },
    { nome: 'Pizza', imagem: 'pizza.jpg', descricao: '', cor: 'rgb(0, 0, 0)' },
    { nome: 'Frango', imagem: 'frango.jpg', descricao: '', cor: 'rgb(0, 0, 0)' }
];

function criarInfo(imagem, infoPrato) {
    const container = document.querySelector('.container');
    
   
    container.innerHTML = '';

    const novoCard = document.createElement('div');
    novoCard.classList.add('card-info');
    

    const imgPrato = document.createElement('img');
    imgPrato.src = imagem;
    imgPrato.id = "jorge"
    imgPrato.alt = 'Imagem detalhada do prato';

    const h2 = document.createElement('h2');
    h2.textContent = ('')

    const p = document.createElement('p');
    p.textContent = ('')

    novoCard.appendChild(imgPrato);
    novoCard.appendChild(h2);
    novoCard.appendChild(p);

    container.appendChild(novoCard);
}

async function criarCard(personagem, isPrimeiro) {
    const container = document.querySelector('.container');
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundColor = personagem.cor;

    const imagem = document.createElement('img');
    
    if (isPrimeiro) {
        
        imagem.src = `img/${personagem.imagem}`;
    } else {
        const imagemAPI = await pesquisarFotos(personagem.nome); 
        imagem.src = imagemAPI;
    }

    imagem.alt = personagem.nome;

    const h2 = document.createElement('h2');
    h2.textContent = personagem.nome;

    const p = document.createElement('p');
    p.textContent = personagem.descricao;

    const button = document.createElement('button');
    button.textContent = 'Saiba Mais'; 

    button.onclick = async () => {
        const imagemAPI = await pesquisarFotos(personagem.nome); 
        criarInfo(imagemAPI, personagem); 
    };

    button.classList.add('card-button'); 
    card.appendChild(imagem);
    card.appendChild(h2);
    card.appendChild(p);
    container.appendChild(card);
    card.appendChild(button); 
}


personagens.forEach((personagem, index) => {
    criarCard(personagem, index === 0);
});
