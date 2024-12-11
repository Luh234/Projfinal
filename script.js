document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Exemplo de validação básica
    if (nome && email && mensagem) {
        // Aqui você pode integrar com um serviço de backend ou API para enviar o e-mail
        const responseMessage = document.getElementById('responseMessage');
        responseMessage.innerHTML = `<p>Obrigado pelo seu contato, ${nome}. Sua mensagem foi enviada com sucesso!</p>`;
        responseMessage.style.color = "green";
    } else {
        const responseMessage = document.getElementById('responseMessage');
        responseMessage.innerHTML = "<p>Por favor, preencha todos os campos.</p>";
        responseMessage.style.color = "red";
    }
});
