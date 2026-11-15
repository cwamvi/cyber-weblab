// --- 1. TEMA CLARO / ESCURO ---
const btnTema = document.getElementById('btn-tema');
const iconeTema = document.getElementById('icone-tema');

// Mantém o tema escolhido ao navegar entre as páginas
if (localStorage.getItem('tema') === 'escuro') {
  document.body.classList.add('escuro');
  iconeTema.textContent = 'light_mode';
}

btnTema.addEventListener('click', () => {
  document.body.classList.toggle('escuro');
  const estaEscuro = document.body.classList.contains('escuro');

  iconeTema.textContent = estaEscuro ? 'light_mode' : 'dark_mode';
  localStorage.setItem('tema', estaEscuro ? 'escuro' : 'claro');
});

// --- 2. TAMANHO DA FONTE (ACESSIBILIDADE) ---
const btnFonte = document.getElementById('btn-fonte');

if (localStorage.getItem('fonte') === 'grande') {
  document.documentElement.classList.add('fonte-grande');
}

btnFonte.addEventListener('click', () => {
  document.documentElement.classList.toggle('fonte-grande');
  const estaGrande = document.documentElement.classList.contains('fonte-grande');

  localStorage.setItem('fonte', estaGrande ? 'grande' : 'normal');
});

// --- 3. FORMULÁRIO DE CONTATO ---
const formContato = document.getElementById('form-contato');

// Só executa se estiver na página contato.html
if (formContato) {
  formContato.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Evita recarregar a página
    alert('Página em construção! Sua mensagem não foi enviada.');
    formContato.reset();
  });
}