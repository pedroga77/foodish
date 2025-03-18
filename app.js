'use strict'

async function pesquisarFotos() {
    const url = `https://foodish-api.com/images/somefoodish/`
    
    const response = await fetch(url)
    const data = await response.json()
  
  
  
    return data
}

const disciplinas = [
{nome:    'Restaurant Rugal'}
]

function criarItemMenu(disciplina){ 
    const listaMenu = document.getElementById('menu') 
    const novoItem = document.createElement('li')
    const novoLink = document.createElement('a')

    novoLink.href = '#'
    novoLink.textContent = disciplina.nome
    novoLink.style = `--cor-hover: ${disciplina.cor}`
    
    novoItem.appendChild(novoLink)
    listaMenu.appendChild(novoItem)
    
}

disciplinas.forEach(criarItemMenu)

const personagens = [
    { nome: 'Arroz', imagem: 'arroz.jpg', cor: 'rgb(0, 0, 0)' },
    { nome: 'Arroz Indiano  ', imagem: 'arroz_indiano.jpg', cor: 'rgb(0,0,0)' },
    { nome: 'Hamburgueres', imagem: 'hamburguer.jpg', cor: 'rgb(0, 0, 0)' },
    { nome: 'Sobremesas', imagem: 'sobremesas.jpg', cor: 'rgb(0, 0, 0)' },
    { nome: 'Pizza', imagem: 'pizza.jpg', cor: 'rgb(0, 0, 0)' },
    { nome: 'Frango', imagem: 'frango.jpg', cor: 'rgb(0, 0, 0)' }
];

function criarCard(personagem) {
    const container = document.querySelector('.container');
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundColor = personagem.cor;

    const imagem = document.createElement('img');
    imagem.src = `img/${personagem.imagem}`;
    imagem.alt = personagem.nome;

    const h2 = document.createElement('h2');
    h2.textContent = personagem.nome;

    const p = document.createElement('p');
    p.textContent = personagem.descricao;

     const button = document.createElement('button');
     button.textContent = 'Saiba Mais'; 
     button.onclick = () => {
         window.location.href = `https://foodish-api.com/images/somefoodish/${personagem.nome.toLowerCase().replace(/\s+/g, '-')}`; 
     };
     button.classList.add('card-button'); 
    card.appendChild(imagem);
    card.appendChild(h2);
    card.appendChild(p);
    container.appendChild(card);
    card.appendChild(button); 
   
}
personagens.forEach(criarCard);