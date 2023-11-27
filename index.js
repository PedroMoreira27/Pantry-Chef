<script>
document.addEventListener('DOMContentLoaded', function () {
  // Seleciona o formulário pelo ID
  const form = document.getElementById('formCadastro');

  // Adiciona um ouvinte de evento para a submissão do formulário
  form.addEventListener('submit', function (event) {
    // Impede o envio padrão do formulário para evitar recarregar a página
    event.preventDefault();

    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('floatingInput').value;
    const senha = document.getElementById('senha').value;
    const dataNascimento = document.getElementById('data_nascimento').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;

    // Cria um objeto com os dados do formulário
    const formData = {
      nome,
      email,
      senha,
      dataNascimento,
      telefone,
      endereco
    };

    // Envia os dados para o backend usando a API Fetch
    fetch('http://localhost:3333/cadastro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      // Lida com a resposta do backend, se necessário
      console.log('Resposta do servidor:', data);
    })
    .catch(error => {
      // Lida com erros de requisição
      console.error('Erro ao enviar dados:', error);
    });
  });
});
</script>
