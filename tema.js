const botaoTema = document.querySelector('#tema');
function aplicarTema(escuro) {
  document.documentElement.dataset.tema = escuro ? 'escuro' : 'claro';
  botaoTema.setAttribute('aria-pressed', String(escuro));
  botaoTema.textContent = escuro ? 'Modo claro' : 'Modo escuro';
}
let temaSalvo = null;
try { temaSalvo = localStorage.getItem('tasklist-tema'); } catch (_) { /* Usa o tema claro. */ }
aplicarTema(temaSalvo === 'escuro');
botaoTema.addEventListener('click', () => {
  const escuro = document.documentElement.dataset.tema !== 'escuro';
  aplicarTema(escuro);
  try { localStorage.setItem('tasklist-tema', escuro ? 'escuro' : 'claro'); } catch (_) { /* Mantem o tema durante a sessao. */ }
});
