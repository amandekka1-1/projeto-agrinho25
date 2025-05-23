document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        document.getElementById('mensagem-sucesso').innerText = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
        document.getElementById('form-contato').reset();
    } else {
        document.getElementById('mensagem-sucesso').innerText = 'Por favor, preencha todos os campos.';
    }
});
