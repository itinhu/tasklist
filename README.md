# Task List

Lista de tarefas para praticar Git Flow na disciplina de Tópicos em Computação. Usa HTML semântico, CSS e JavaScript puro, sem dependências. Abra `projeto.html` em um navegador moderno; não é necessário instalar pacotes. O armazenamento local depende das permissões e da origem do navegador.

## Funcionalidades

Cadastro com validação e indicador de carregamento; conclusão e filtros por status; persistência de tarefas e status; alternância e persistência do tema. Os dados inválidos são ignorados e a aplicação continua caso o armazenamento esteja indisponível. Sem dados salvos, a lista começa vazia.

## Prática de Git Flow

1. `feature/estrutura-inicial`, criada de `develop`: revisão da estrutura existente e correção do caminho do CSS. Integrada à `develop`.
2. `feature/formulario` e `feature/filtro`, criadas do mesmo commit de `develop`: formulário e filtros, integrados nessa ordem. O Git apontou conflitos em `projeto.html` (controles e scripts) e `projeto.css` (regras de formulário e filtros). Os marcadores foram examinados e removidos, combinando as duas alterações. Uma abertura duplicada de lista escapou da resolução e foi corrigida posteriormente em `fix/estrutura-lista`, integrada a `main` e `develop`.
3. `release/v1.0.0`, criada de `develop`: validação, indicador de carregamento e ajustes de acessibilidade; integrada a `main` e `develop`.
4. `hotfix/v1.0.1`, criada de `main`: persistência local e tratamento de dados inválidos; integrada a `main` e `develop`.
5. `feature/dark-mode`, criada de `develop` após integrar o hotfix: temas claro e escuro; integrada apenas a `develop`.

As integrações locais usaram commits de merge com `--no-ff`. O PR #1 registrado no histórico é anterior a esta execução; nenhum PR remoto foi criado ou revisado aqui.

## Tags

A tag preexistente `1.0.0` aponta para o merge do PR anterior. A tag anotada `v1.0.0` aponta para o merge da release na `main`; `v1.0.1` aponta para o merge do hotfix. As duas tags novas precedem a correção posterior da estrutura HTML, portanto seus snapshots contêm a abertura de lista duplicada; a correção está nos commits posteriores das branches `main` e `develop`. Nenhuma tag foi movida.

## Comandos utilizados

Foram utilizados `git status`, `git remote -v`, `git branch -a`, `git log --oneline --graph --decorate --all`, `git tag -n`, `git diff`, `git diff --staged`, `git switch`, `git branch`, `git add`, `git commit`, `git merge --no-ff`, `git merge-base --is-ancestor` e `git tag -a`. Nenhum push foi executado.

## Verificações

`node --check` passou para os três scripts; `git diff --check` passou; a busca por marcadores de conflito nos arquivos da aplicação não encontrou ocorrências. A inspeção identificou e corrigiu a lista duplicada. O navegador integrado estava indisponível: cadastro, spinner, filtros, persistência após recarga, temas, responsividade, contraste e acessibilidade não foram testados em navegador e devem ser verificados manualmente. As validações sintáticas não substituem testes funcionais.
