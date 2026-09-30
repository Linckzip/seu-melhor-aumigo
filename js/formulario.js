// =========================
// IMPORTAÇÃO
// =========================

import {
    salvarCadastro,
    recuperarCadastro
} from "./storage.js";


// =========================
// FORMULÁRIO
// =========================

export function iniciarFormulario() {

    const formulario =
        document.getElementById("formulario");

    const modal =
        document.getElementById(
            "modal-confirmacao"
        );

    const cancelar =
        document.getElementById("cancelar");

    const confirmar =
        document.getElementById("confirmar");

    const toast =
        document.getElementById("toast");


    // =========================
    // MODAL BOOTSTRAP
    // =========================

    const modalBootstrap =
        bootstrap.Modal.getOrCreateInstance(
            modal
        );


    // =========================
    // VALIDAÇÃO EM TEMPO REAL
    // =========================

    const camposValidacao =
        formulario.querySelectorAll(
            'input[type="text"], select'
        );


    camposValidacao.forEach(
        function (campo) {

            campo.addEventListener(
                "input",
                function () {

                    let mensagem =
                        campo.parentElement.querySelector(
                            ".mensagem"
                        );


                    // Cria a mensagem

                    if (!mensagem) {

                        mensagem =
                            document.createElement(
                                "small"
                            );

                        mensagem.classList.add(
                            "mensagem"
                        );

                        campo.parentElement.appendChild(
                            mensagem
                        );

                    }


                    // Campo válido

                    if (campo.validity.valid) {

                        mensagem.textContent =
                            "Campo válido.";

                        mensagem.classList.remove(
                            "erro"
                        );

                        mensagem.classList.add(
                            "sucesso"
                        );

                    }

                    // Campo inválido

                    else {

                        mensagem.textContent =
                            "Verifique o preenchimento do campo.";

                        mensagem.classList.remove(
                            "sucesso"
                        );

                        mensagem.classList.add(
                            "erro"
                        );

                    }

                }
            );

        }
    );


    // =========================
    // ENVIO DO FORMULÁRIO
    // =========================

    formulario.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            if (formulario.checkValidity()) {

                modalBootstrap.show();

            } else {

                formulario.reportValidity();

            }

        }
    );


    // =========================
    // CANCELAR
    // =========================

    cancelar.addEventListener(
        "click",
        function () {

            modalBootstrap.hide();

        }
    );


    // =========================
    // CONFIRMAR
    // =========================

    confirmar.addEventListener(
        "click",
        function () {

            // Salva os dados

            salvarCadastro();


            // Fecha o modal

            modalBootstrap.hide();


            // Limpa os campos

            formulario.reset();


            // Remove as mensagens

            const mensagens =
                formulario.querySelectorAll(
                    ".mensagem"
                );


            mensagens.forEach(
                function (mensagem) {

                    mensagem.remove();

                }
            );


            // Mostra o toast

            toast.classList.add("show");


            setTimeout(
                function () {

                    toast.classList.remove(
                        "show"
                    );

                },
                3000
            );

        }
    );


    // =========================
    // RESTAURAR DADOS
    // =========================

    recuperarCadastro();

}