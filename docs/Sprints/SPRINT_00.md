

# Modelo de Dados da Tarefa

Antes da implementação, foi definido o formato que representa uma tarefa dentro da aplicação.

Cada tarefa será representada por um objeto JavaScript.

```js
{
  id: 1,
  title: "Estudar React",
  description: "Aprender JSX e useState",
  favorite: false,
  completed: false,
  createdAt: "2026-07-27"
}
```

## Descrição dos Campos

| Campo | Tipo | Descrição |
|--------|------|-----------|
| id | number / string | Identificador único da tarefa. |
| title | string | Título da tarefa. |
| description | string | Descrição da tarefa. |
| favorite | boolean | Indica se a tarefa está marcada como favorita. |
| completed | boolean | Indica se a tarefa foi concluída. |
| createdAt | date / string | Data de criação da tarefa. |

## Motivo da Definição Antecipada

A definição do modelo de dados antes da implementação permite:

- Organizar melhor a estrutura da aplicação.
- Facilitar a comunicação entre componentes.
- Evitar alterações estruturais durante o desenvolvimento.
- Preparar a persistência dos dados no Local Storage.



# Critérios de Aceitação

Uma funcionalidade será considerada concluída apenas quando cumprir todos os critérios definidos.

## Criar Tarefa

**Dado que** o utilizador preenche corretamente o formulário,

**Quando** clicar no botão **"Adicionar Tarefa"**,

**Então:**

- A tarefa deve ser adicionada à lista.
- Os dados devem ser guardados.
- A interface deve ser atualizada automaticamente.

---

## Persistência dos Dados

**Dado que** existem tarefas guardadas,

**Quando** o utilizador fechar e voltar a abrir a aplicação,

**Então:**

- Todas as tarefas devem continuar disponíveis.

---

## Favoritos

**Dado que** existe uma tarefa,

**Quando** o utilizador clicar no botão de favorito,

**Então:**

- O estado de favorito deve ser alterado.
- A interface deve refletir imediatamente essa alteração.
- A informação deve permanecer guardada após reiniciar a aplicação.

---

## Conclusão de Tarefa

**Dado que** existe uma tarefa pendente,

**Quando** o utilizador marcar a checkbox,

**Então:**

- A tarefa deve ser apresentada como concluída.
- O estado deve permanecer guardado.
- A tarefa não deve ser eliminada automaticamente.

---

## Editar Tarefa

**Dado que** existe uma tarefa,

**Quando** o utilizador selecionar a opção de edição,

**Então:**

- Deve conseguir alterar o título e/ou a descrição.
- As alterações devem ser refletidas na interface.
- As alterações devem permanecer guardadas.

---

## Eliminar Tarefa

**Dado que** existe uma tarefa,

**Quando** o utilizador selecionar a opção de eliminar,

**Então:**

- A tarefa deve desaparecer da lista.
- Deve ser removida do Local Storage.