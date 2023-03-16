const TAMANHO_PADRAO = 16;
const TAMANHO_MEDIO = 32;
const TAMANHO_GRANDE = 64;
let size = TAMANHO_PADRAO;

document.querySelector(".botao-tema").addEventListener("click", switchTheme);
function switchTheme() {
    const element = document.body;
    const icone = document.getElementById("icone-tema");

    if (icone.innerHTML == "dark_mode") {
        this.style.color = "var(--secondary-dark)";
        this.innerHTML = `<span class="material-icons" id="icone-tema">light_mode</span>light mode`;
    } else {
        this.style.color = "var(--secondary-light)";
        this.innerHTML = `<span class="material-icons" id="icone-tema">dark_mode</span>dark mode`;
    }
    element.classList.toggle("dark-mode");
}



document.getElementById("botao-pequeno").addEventListener("click", () => criaGrid("pequeno"));
document.getElementById("botao-medio").addEventListener("click", () => criaGrid("medio"));
document.getElementById("botao-grande").addEventListener("click", () => criaGrid("grande"));
document.getElementById("botao-reset").addEventListener("click", () => resetGrid());

function criaGrid(tamanho) {
    //definindo o tamanho do grid
    switch(tamanho) {
        case "pequeno":
            size = TAMANHO_PADRAO;
            break;
        case "medio":
            size = TAMANHO_MEDIO;
            break;
        case "grande":
            size = TAMANHO_GRANDE;
            break;
    }
    
    //definindo o grid
    let grid = document.getElementById("grid");
    grid.innerHTML = "";
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    grid.classList.remove("grid-pequeno", "grid-medio", "grid-grande");
    grid.classList.add(`grid-${tamanho}`);

    //populando o grid
    let square = document.createElement("div");
    square.classList.add("square");
    for (let i = 0; i < size*size; i++) {
        grid.appendChild(square.cloneNode(true));
    }
    setSquares();
}

//função de resetar o grid
function resetGrid(){
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.backgroundColor = "var(--primary)";
    });
}


//função de colorir os quadrados rainbow
function setSquares(){
    const squares = document.querySelectorAll(".square");
    console.log(squares);
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = randomColor();
        });
    });
}

function randomColor() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}

//grid padrão
window.onload = () => {
    criaGrid('pequeno');
}