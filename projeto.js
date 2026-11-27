const formulario = document.querySelector('#formulario');
const campo = document.querySelector('#nova-tarefa');
const lista = document.querySelector('#lista-tarefas');
const chaveTarefas = 'tasklist-tarefas';
function salvarTarefas() {
  const tarefas = Array.from(lista.querySelectorAll('.tarefa'), (item) => ({
    texto: item.querySelector('label').textContent,
    concluida: item.querySelector('input[type="checkbox"]').checked
  }));
  try { localStorage.setItem(chaveTarefas, JSON.stringify(tarefas)); } catch (_) { /* A interface continua utilizavel sem armazenamento. */ }
}
function carregarTarefas() {
  let tarefas = [];
  try {
    const dados = JSON.parse(localStorage.getItem(chaveTarefas) || '[]');
    if (Array.isArray(dados)) tarefas = dados.filter((t) => t && typeof t.texto === 'string' && typeof t.concluida === 'boolean');
  } catch (_) { tarefas = []; }
  lista.replaceChildren();
  tarefas.forEach((tarefa, indice) => {
    const item = document.createElement('li');
    item.className = 'tarefa';
    const caixa = document.createElement('input');
    caixa.type = 'checkbox';
    caixa.id = 'salva-' + indice;
    caixa.checked = tarefa.concluida;
    const rotulo = document.createElement('label');
    rotulo.htmlFor = caixa.id;
    rotulo.textContent = tarefa.texto;
    item.append(caixa, rotulo);
    lista.append(item);
  });
}
carregarTarefas();
lista.addEventListener('change', salvarTarefas);
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const texto = campo.value.trim();
  const erro = document.querySelector('#erro-tarefa');
  if (!texto) {
    erro.textContent = 'Digite uma tarefa antes de adicionar.';
    campo.setAttribute('aria-invalid', 'true');
    campo.focus();
    return;
  }
  erro.textContent = '';
  campo.removeAttribute('aria-invalid');
  const botao = formulario.querySelector('button');
  const spinner = formulario.querySelector('.spinner');
  botao.disabled = true;
  spinner.hidden = false;
  setTimeout(() => {
  const item = document.createElement('li');
  item.className = 'tarefa';
  const caixa = document.createElement('input');
  caixa.type = 'checkbox';
  const rotulo = document.createElement('label');
  const id = 'tarefa-' + Date.now() + '-' + Math.random().toString(36).slice(2);
  caixa.id = id;
  rotulo.htmlFor = id;
  rotulo.textContent = texto;
  item.append(caixa, rotulo);
  lista.append(item);
  atualizarFiltro();
  campo.value = '';
  spinner.hidden = true;
  botao.disabled = false;
  campo.focus();
  }, 300);
});
