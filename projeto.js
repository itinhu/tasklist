const formulario = document.querySelector('#formulario');
const campo = document.querySelector('#nova-tarefa');
const lista = document.querySelector('#lista-tarefas');
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
