document.querySelector(".botao-tema").addEventListener("click", switchTheme);
function switchTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'light' ? 'dark' : 'light';
    const botao = newTheme === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
    this.innerHTML = `<span class="material-icons" id="icone-tema">${botao}_mode</span>${botao} mode`;
}

document.getElementById("botao-pequeno").addEventListener("click", () => criaGrid("pequeno"));
document.getElementById("botao-medio").addEventListener("click", () => criaGrid("medio"));
document.getElementById("botao-grande").addEventListener("click", () => criaGrid("grande"));
document.getElementById("botao-reset").addEventListener("click", () => resetGrid());

function criaGrid(tamanho) {
    //definindo o tamanho do grid
    let colunas = 16;
    let linhas = 9;
    let grid = document.querySelector(".grid");
    grid.innerHTML = "";
    grid.classList.remove("pequeno", "medio", "grande");
    switch(tamanho) {
        case "pequeno":
            grid.classList.add("pequeno");
            colunas = 16;
            linhas = 9;
            break;
        case "medio":
            grid.classList.add("medio");
            colunas = 32;
            linhas = 18;
            break;
        case "grande":
            grid.classList.add("grande");
            colunas = 64;
            linhas = 36;
            break;
    }

    console.log(colunas, linhas);

    //populando o grid
    let square = document.createElement("div");
    square.classList.add("square");
    for (let i = 0; i < linhas*colunas; i++) {
        grid.appendChild(square.cloneNode(true));
    }
    setSquares();
}

//função de resetar o grid
function resetGrid(){
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.backgroundColor = 'white';
    });
}


//função de colorir os quadrados rainbow
function setSquares(){
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = randomColor();
        });
    });
}

function randomColor() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}

window.onload = () => {
    switchTheme();
}