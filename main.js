$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: false
            },
            mensagem: {
                required: true,
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu e-mail',
            mensagem: 'Por favor, escreva sua mensagem'
        },
        submitHandler: function (form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            const camposIncorretos = validador.numberOfInvalids();

            if (camposIncorretos) {
                let listaErros = '<ul>';

                validador.errorList.forEach(function (erro) {
                    listaErros += `<li>${erro.message}</li>`;
                });

                listaErros += '</ul>';

                $('#mensagemModalErro').html(listaErros);

                const modal = new bootstrap.Modal(document.getElementById('modalErroFormulario'));
                modal.show();
            }
        }
    })
})