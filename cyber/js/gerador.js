const campoSenha = document.getElementById('senha');
const btnGerar = document.getElementById('btn-gerar');
const btnCopiar = document.getElementById('btn-copiar');
const aviso = document.getElementById('aviso');

function gerarSenha() {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';
  let senhaGerada = '';

  for (let i = 0; i < 14; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    senhaGerada += caracteres[indiceAleatorio];
  }

  campoSenha.textContent = senhaGerada;
  aviso.textContent = '';
}

btnGerar.addEventListener('click', gerarSenha);

btnCopiar.addEventListener('click', () => {
  navigator.clipboard.writeText(campoSenha.textContent);
  aviso.textContent = 'Senha copiada com sucesso!';
});

// Gera uma senha automaticamente assim que a página abre
gerarSenha();