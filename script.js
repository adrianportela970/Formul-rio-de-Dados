const script_do_google = 'https://script.google.com/macros/s/AKfycbxAPCnxz2FS7qeX3Z3taGZ2wbKEvPU_evwxUXbQNGJdcn-qbQDZwT3h4kX0TCOTmHuy/exec';
const dados_do_formulario = document.forms['formulario-contato'];

function enviarDados(event) {
    // Previne o envio padrão do formulário
    event.preventDefault();

    // Envia os dados para o script do Google usando fetch
    fetch(script_do_google, {
        method: 'POST',
        body: new FormData(dados_do_formulario) // Coleta os dados do formulário
    })
    .then(response => {
        // Garante que a resposta é tratada corretamente
        if (!response.ok) {
            throw new Error(`Erro HTTP! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Verifica o status enviado pelo Apps Script
        if (data.status === 'sucesso') {
            alert(data.mensagem); // Exibe mensagem de sucesso
            dados_do_formulario.reset(); // Limpa o formulário
        } else {
            alert('Erro: ' + data.mensagem); // Exibe mensagem de erro
        }
    })
    .catch(error => {
        // Exibe erro no console
        console.error('Erro no envio dos dados!', error);
    });
}

console.log('Script conectado ao index.html com sucesso!');
