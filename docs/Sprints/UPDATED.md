# Task Flow

Aplicação de gerenciamento de tarefas desenvolvida com React.

O projeto foi desenvolvido de forma progressiva, começando pela estrutura básica da aplicação e evoluindo para gerenciamento de estado, comunicação entre componentes, persistência de dados e interação com o utilizador.

---

# Objetivo

Criar uma aplicação simples de gerenciamento de tarefas que permita ao utilizador:

- Criar tarefas;
- Visualizar tarefas;
- Marcar tarefas como favoritas;
- Marcar tarefas como concluídas;
- Eliminar tarefas;
- Manter os dados mesmo após atualizar ou fechar o navegador.

---

# Tecnologias

- React
- JavaScript
- Vite
- CSS
- CSS Modules
- Local Storage
- JSON

---

# REQUISITOS

## Requisitos Funcionais

O sistema deve permitir:

- [x] Adicionar uma tarefa;
- [x] Introduzir título;
- [x] Introduzir descrição;
- [x] Listar todas as tarefas;
- [x] Marcar/desmarcar favorita;
- [x] Marcar/desmarcar como concluída;
- [ ] Editar tarefa;
- [x] Eliminar tarefa;
- [x] Guardar automaticamente no `localStorage`;
- [x] Carregar automaticamente as tarefas ao abrir a aplicação.

### Observação sobre a edição

A funcionalidade de edição foi prevista desde o planeamento inicial, porém foi deliberadamente deixada para uma etapa posterior.

A interface apresenta temporariamente a opção de edição como desativada.

Essa decisão foi tomada para priorizar as funcionalidades essenciais para a primeira entrega:

1. Criar tarefa;
2. Listar tarefa;
3. Favoritar;
4. Concluir;
5. Eliminar;
6. Persistir os dados.

A funcionalidade de edição será implementada posteriormente sem necessidade de alterar a arquitetura principal da aplicação.

---

# Requisitos Não Funcionais

- Interface simples e intuitiva.
- Código organizado em componentes React.
- Boa legibilidade.
- Responsiva (desktop e mobile).
- Boa experiência de utilização.

---

# Arquitetura dos Componentes

A aplicação foi organizada de forma que o `App` seja responsável pelo estado principal das tarefas.

Estrutura simplificada:

```text
App
│
├── Header
│
├── TaskForm
│
└── TaskList
      │
      └── TaskCard