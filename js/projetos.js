// =========================
// DADOS DOS PROJETOS
// =========================

const projetos = [

    {
        titulo: "Projeto Recomeço",

        descricao:
            "Resgatamos animais encontrados em situação de abandono e oferecemos atendimento veterinário, alimentação e um espaço seguro até que estejam preparados para encontrar um novo lar.",

        imagem: "/images/projetos/veterinario-gato.webp",

        alt: "Gato sendo cuidado no veterinário"
    },

    {
        titulo: "Campanha Patas Saudáveis",

        descricao:
            "Realizamos campanhas de vacinação, vermifugação e cuidados básicos para animais em situação de vulnerabilidade, ajudando a melhorar sua qualidade de vida.",

        imagem: "/images/projetos/vacinação.webp",

        alt: "Cachorro sendo vacinado"
    },

    {
        titulo: "Projeto Lar Feliz",

        descricao:
            "Organizamos feiras e campanhas de adoção responsável para conectar nossos animais resgatados a famílias que possam oferecer carinho, segurança e uma vida digna.",

        imagem: "/images/projetos/gato-sendo-adotado.webp",

        alt: "Gato sendo adotado"
    },

    {
        titulo: "Mutirão de castração",

        descricao:
            "Promovemos ações de castração para cães e gatos, contribuindo para o controle da população de animais abandonados e para a prevenção de problemas de saúde.",

        imagem: "/images/projetos/Cachorro-castrado.webp",

        alt: "Cachorro com cone para segurança pós-castração"
    }

];


// =========================
// RENDERIZAÇÃO
// =========================

export function renderizarProjetos() {

    const listaProjetos =
        document.getElementById("lista-projetos");

    let coluna1 = "";
    let coluna2 = "";


    projetos.forEach(function (projeto, index) {

        const card = `
            <div class="card">

                <h3>${projeto.titulo}</h3>

                <p>
                    ${projeto.descricao}
                </p>

                <img
                    src="${projeto.imagem}"
                    alt="${projeto.alt}"
                    width="360"
                    height="200"
                    loading="lazy">

            </div>
        `;


        if (index < 2) {

            coluna1 += card;

        } else {

            coluna2 += card;

        }

    });


    listaProjetos.innerHTML = `
        <section class="projeto-coluna">
            ${coluna1}
        </section>

        <section class="projeto-coluna">
            ${coluna2}
        </section>
    `;

}