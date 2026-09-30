// =========================
// SALVAR CADASTRO
// =========================

export function salvarCadastro() {

    const cadastro = {

        nome:
            document.getElementById("nome").value,

        sobrenome:
            document.getElementById("sobrenome").value,

        CPF:
            document.getElementById("CPF").value,

        voluntario:
            document.querySelector(
                'input[name="voluntario"]:checked'
            )?.value || "",

        area:
            document.getElementById("areas").value,

        periodos: {

            manha:
                document.getElementById(
                    "questionario-manha"
                ).checked,

            tarde:
                document.getElementById(
                    "questionario-tarde"
                ).checked,

            noite:
                document.getElementById(
                    "questionario-noite"
                ).checked,

            fim:
                document.getElementById(
                    "questionario-fim"
                ).checked

        },

        motivacao:
            document.getElementById("motivacao").value

    };


    localStorage.setItem(
        "cadastroVoluntario",
        JSON.stringify(cadastro)
    );

}


// =========================
// RECUPERAR CADASTRO
// =========================

export function recuperarCadastro() {

    const dadosSalvos =
        localStorage.getItem(
            "cadastroVoluntario"
        );


    if (!dadosSalvos) {

        return;

    }


    const cadastro =
        JSON.parse(dadosSalvos);


    document.getElementById("nome").value =
        cadastro.nome || "";


    document.getElementById("sobrenome").value =
        cadastro.sobrenome || "";


    document.getElementById("CPF").value =
        cadastro.CPF || "";


    if (cadastro.voluntario) {

        const voluntario =
            document.querySelector(
                `input[name="voluntario"][value="${cadastro.voluntario}"]`
            );


        if (voluntario) {

            voluntario.checked = true;

        }

    }


    document.getElementById("areas").value =
        cadastro.area || "";


    if (cadastro.periodos) {

        document.getElementById(
            "questionario-manha"
        ).checked =
            cadastro.periodos.manha || false;


        document.getElementById(
            "questionario-tarde"
        ).checked =
            cadastro.periodos.tarde || false;


        document.getElementById(
            "questionario-noite"
        ).checked =
            cadastro.periodos.noite || false;


        document.getElementById(
            "questionario-fim"
        ).checked =
            cadastro.periodos.fim || false;

    }


    document.getElementById("motivacao").value =
        cadastro.motivacao || "";

}