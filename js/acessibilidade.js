export function iniciarAcessibilidade() {

    const botaoContraste = document.getElementById("botao-contraste");

    if (!botaoContraste) {
        return;
    }

    const contrasteAtivo =
        localStorage.getItem("altoContraste") === "true";

    if (contrasteAtivo) {
        document.body.classList.add("alto-contraste");
        botaoContraste.setAttribute("aria-pressed", "true");
        botaoContraste.textContent = "Contraste normal";
    }

    botaoContraste.addEventListener("click", () => {

        const ativo =
            document.body.classList.toggle("alto-contraste");

        botaoContraste.setAttribute(
            "aria-pressed",
            ativo.toString()
        );

        botaoContraste.textContent =
            ativo
                ? "Contraste normal"
                : "Alto contraste";

        localStorage.setItem(
            "altoContraste",
            ativo.toString()
        );
    });
}