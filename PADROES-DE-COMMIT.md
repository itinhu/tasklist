# Padrões de commit — guia de estudo

Resumo adaptado do [guia de iuricode no GitHub](https://github.com/iuricode/padroes-de-commits), com exemplos próprios para praticar.

## Formato

```text
:emoji: tipo(escopo): descrição
```

No guia, emoji e escopo são opcionais. O escopo identifica a área alterada. Use `!` depois do tipo ou escopo para sinalizar quebra de compatibilidade.

## Tipos apresentados no guia

| Tipo | Quando usar |
| --- | --- |
| `feat` | Novo recurso |
| `fix` | Correção de bug |
| `docs` | Documentação |
| `test` | Testes |
| `build` | Build e dependências |
| `perf` | Desempenho |
| `style` | Formatação do código |
| `refactor` | Reorganização sem mudar comportamento |
| `chore` | Manutenção e configurações auxiliares |
| `ci` | Integração contínua |
| `raw` | Dados e parâmetros |
| `cleanup` | Limpeza de código |
| `remove` | Exclusão de arquivos ou funcionalidades |
| `init` | Início do projeto |
| `revert` | Reversão de commit |
| `security` | Segurança |

## Recomendações do iuricode

- Escolha um tipo coerente com a alteração.
- Prefira título curto: o guia sugere até quatro palavras na primeira linha.
- Coloque motivos e impactos no corpo; referências e revisão no rodapé.
- Use emoji representativo e links completos.

Essas recomendações vêm do [repositório original](https://github.com/iuricode/padroes-de-commits). Os exemplos e dicas abaixo são complementos didáticos.

## Exemplos próprios para praticar

```bash
git commit -m ":tada: init: iniciar projeto"
git commit -m ":sparkles: feat(login): adicionar recuperação"
git commit -m ":bug: fix(carrinho): corrigir subtotal"
git commit -m ":books: docs: explicar instalação"
git commit -m ":test_tube: test(login): cobrir senha inválida"
git commit -m ":package: build: atualizar compilador"
git commit -m ":zap: perf(busca): reduzir consultas"
git commit -m "style: padronizar indentação"
git commit -m ":recycle: refactor: extrair validação"
git commit -m ":see_no_evil: chore: ignorar logs"
git commit -m ":bricks: ci: automatizar testes"
git commit -m ":card_file_box: raw: atualizar municípios"
git commit -m ":broom: cleanup: eliminar código comentado"
git commit -m ":wastebasket: remove: excluir página antiga"
git commit -m "revert: desfazer menu experimental"
git commit -m ":lock: security: restringir acesso administrativo"
```

Execute apenas o comando que descreve as alterações preparadas para o commit. As palavras entre dois-pontos representam emojis no GitHub; você também pode digitar o emoji diretamente.

## Como escolher sem se confundir

- **`style` e CSS:** mudar indentação é `style`. Adicionar um novo tema é uma funcionalidade, por exemplo `feat(tema): adicionar modo escuro`. Corrigir um botão cortado pode ser `fix(layout): corrigir botão cortado`.
- **`refactor` e `fix`:** extrair uma função mantendo o resultado é refatoração; corrigir um cálculo incorreto é correção.
- **`build` e `chore`:** para atualizar uma biblioteca, prefira `build`. Para ignorar arquivos de log, use `chore`.
- **Tipos específicos:** `raw`, `cleanup`, `remove` e `security` dependem da convenção aceita pelo projeto. Verifique os tipos permitidos pelo validador da equipe.

## Título, corpo e rodapé

O título resume a ação. Quando a mudança exige contexto, acrescente um corpo separado por uma linha vazia:

```text
fix(pagamento): impedir cobrança duplicada

Reutiliza a identificação da operação quando o cliente tenta novamente.
Isso evita uma segunda cobrança após uma falha de conexão.

Refs: #42
```

Para escrever uma mensagem com várias linhas, execute `git commit` sem `-m` e use o editor configurado no Git.

### Mudança incompatível

```text
feat(api)!: exigir identificação

BREAKING CHANGE: o endpoint de pedidos passa a exigir clienteId.
Atualize os consumidores para enviar o campo obrigatório.
```

Explique o que mudou e como adaptar quem usa a funcionalidade. Uma alteração grande em quantidade de linhas não significa, por si só, quebra de compatibilidade.

## Ligação com Gitflow

A branch indica onde o trabalho acontece; o tipo do commit descreve a alteração registrada.

| Branch de exemplo | Commit possível |
| --- | --- |
| `feature/recuperar-senha` | `feat(login): adicionar recuperação` |
| `hotfix/total-incorreto` | `fix(carrinho): corrigir subtotal` |
| `release/1.2.0` | `docs: atualizar notas da versão` |

Uma branch de feature também pode ter commits `test`, `docs` e `refactor`, conforme o trabalho realizado.

## Rotina antes de commitar

```bash
git status
git diff
git add caminho/do/arquivo
git diff --staged
git commit -m "docs: adicionar guia Gitflow"
```

Troque o caminho e a mensagem conforme sua alteração. Confira se o stage contém somente o que você pretende registrar e mantenha cada commit focado em uma mudança compreensível.
