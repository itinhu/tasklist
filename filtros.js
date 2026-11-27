const botoesFiltro = document.querySelectorAll('[data-filtro]');
let filtroAtual = 'todas';
function atualizarFiltro() {
  document.querySelectorAll('.tarefa').forEach((item) => {
    const concluida = item.querySelector('input[type="checkbox"]').checked;
    item.hidden = filtroAtual === 'pendentes' ? concluida : filtroAtual === 'concluidas' ? !concluida : false;
  });
}
botoesFiltro.forEach((botao) => botao.addEventListener('click', () => {
  filtroAtual = botao.dataset.filtro;
  botoesFiltro.forEach((outro) => outro.setAttribute('aria-pressed', String(outro === botao)));
  atualizarFiltro();
}));
document.querySelector('.tarefas').addEventListener('change', atualizarFiltro);
