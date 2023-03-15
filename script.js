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