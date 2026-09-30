// =========================
// ROTEAMENTO DA SPA
// =========================

export function iniciarRotas() {

    const links =
        document.querySelectorAll("[data-rota]");

    const paginas =
        document.querySelectorAll(".pagina");


    function mostrarPagina(rota) {

        let paginaDestino = rota;


        // História e Atividades pertencem
        // à página Sobre nós

        if (
            rota === "historia" ||
            rota === "atividades"
        ) {

            paginaDestino = "sobre";

        }


        const pagina =
            document.getElementById(paginaDestino);


        // Caso a rota não exista

        if (!pagina) {

            paginaDestino = "sobre";

        }


        // Esconde todas as páginas

        paginas.forEach(function (item) {

            item.classList.remove("ativa");

        });


        // Mostra a página escolhida

        document
            .getElementById(paginaDestino)
            .classList.add("ativa");


        // Fecha o menu no celular

        document.getElementById(
            "menu-toggle"
        ).checked = false;


        // Rola para História ou Atividades

        if (
            rota === "historia" ||
            rota === "atividades"
        ) {

            const secao =
                document.getElementById(rota);


            if (secao) {

                secao.scrollIntoView({
                    behavior: "smooth"
                });

            }

        } else {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

    }


    // =========================
    // CLIQUE NOS LINKS
    // =========================

    links.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                const rota =
                    link.dataset.rota;


                mostrarPagina(rota);


                history.pushState(
                    null,
                    "",
                    "#" + rota
                );

            }
        );

    });


    // =========================
    // ROTA INICIAL
    // =========================

    function iniciarPagina() {

        const rota =
            window.location.hash.replace("#", "");


        if (rota) {

            mostrarPagina(rota);

        } else {

            mostrarPagina("sobre");

        }

    }


    iniciarPagina();


    // =========================
    // VOLTAR / AVANÇAR
    // =========================

    window.addEventListener(
        "popstate",
        function () {

            const rota =
                window.location.hash.replace("#", "");


            mostrarPagina(
                rota || "sobre"
            );

        }
    );

}