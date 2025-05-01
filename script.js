const script_do_google = 'https://script.google.com/macros/s/AKfycbxAPCnxz2FS7qeX3Z3taGZ2wbKEvPU_evwxUXbQNGJdcn-qbQDZwT3h4kX0TCOTmHuy/exec';
const dados_do_formulario = document.forms['formulario-contato'];

function enviarDados(event) {
    event.preventDefault();

    fetch(script_do_google, {
        method: 'POST',
        body: new FormData(dados_do_formulario)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }
        return response.json(); // Converte a resposta para JSON
    })
    .then(data => {
        if (data.status === 'sucesso') {
            alert(data.mensagem);
            dados_do_formulario.reset();
        } else {
            alert('Erro: ' + data.mensagem);
        }
    })
    .catch(error => {
        console.error('Erro no envio dos dados!', error);
        alert('Falha no envio. Tente novamente.');
    });
}

console.log('Script conectado ao index.html com sucesso!');
