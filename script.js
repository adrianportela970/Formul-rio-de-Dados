const script_do_google = 'https://script.google.com/macros/s/AKfycbwp1RzF_uM-XWQ8OXo1xntai9P4T4yI_U2pyEEXUWuKsy6vdT901PWedIaKxOp5bc2P/exec';
const dados_do_formulario = document.forms['formulario-contato'];

dados_do_formulario.addEventListener('submit', function (e){
    e.preventDefault();

    fetch(script_do_google,{ method: 'POST', body: new FormData(dados_do_formulario)})
    .then(response => {
        alert('Dados enviados com sucesso!', response);
        dados_do_formulario.reset();
    })
    .catch(error =>
        console.error('Erro no envio dos dados!', error)
    )
})