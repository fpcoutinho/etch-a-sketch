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



document.getElementById("botao-pequeno").addEventListener("click", () => createGrid("pequeno"));
document.getElementById("botao-medio").addEventListener("click", () => createGrid("medio"));
document.getElementById("botao-grande").addEventListener("click", () => createGrid("grande"));
document.getElementById("botao-reset").addEventListener("click", () => resetGrid());

function createGrid(tamanho) {
    //definindo o tamanho do grid
    let size = 40*30;
    switch(tamanho) {
        case "pequeno":
            size = 13*8;
            break;
        case "medio":
            size = 18*20 + 15;
            break;
        case "grande":
            size = 46*30;
            break;
    }
    
    //definindo o grid
    let grid = document.getElementById("grid");
    grid.innerHTML = "";
    grid.style.gridTemplateColumns = `repeat(${Math.sqrt(size)}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${Math.sqrt(size)}, 1fr)`;
    grid.classList.remove("grid-pequeno", "grid-medio", "grid-grande");
    grid.classList.add(`grid-${tamanho}`);

    //populando o grid
    let square = document.createElement("div");
    square.classList.add("square");
    for (let i = 0; i < size; i++) {
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
window.onload = () => createGrid("medio");