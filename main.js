const mapSize = 10;
const gameContainer = document.getElementById('game-container');
const setupContainer = document.getElementById('setup-container');
const NomePlayerInput = document.getElementById('Nome-Player');
const CorPlayerInput = document.getElementById('Cor-Player');
const IniciarJogo = document.getElementById('Iniciar-Jogo');

let NomePlayer = '';
let CorPlayer= '#4caf50';
let PosiPlayer = { x: 0, y: 0 };

// F5 no mapa 
function renderMap() {
    gameContainer.innerHTML = '';
    for (let y = 0; y < mapSize; y++) {
        for (let x = 0; x < mapSize; x++) {
            const piso = document.createElement('div');
            piso.classList.add("piso");

            if (PosiPlayer.x === x && PosiPlayer.y === y) {
                piso.classList.add('player');
                piso.style.setProperty('--Cor-Player', CorPlayer);
            }

            gameContainer.appendChild(piso);
        }
    }
}
IniciarJogo.addEventListener('click', () => {
    NomePlayer = NomePlayerInput.value || 'Jogador';
    CorPlayer= CorPlayerInput.value;

    alert(`Bem-vindo, ${NomePlayer}! Boa sorte no jogo.`);

    setupContainer.style.display = 'none';
    gameContainer.style.display = 'grid';
  
    renderMap();
}
);

function criarParedes(mapa) {
    for (let i = 0; i < mapa.length; i++) {
        for (let j = 0; j < mapa[i].length; j++) {
            if (i === 0 || j === 0 || i === mapa.length - 1 || j === mapa[i].length - 1) {
                mapa[i][j] = 'P';  //  EU TAVA ACABANDO DE CRIAR A PAREDE POJA ODEIO OS TIMES DA VIDA
            }
        }
    }
}
