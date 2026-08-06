# Sprint 01 — Configuração do Projeto React

## Informações da Sprint

**Projeto:** Task Flow (To-Do List React)

**Sprint:** 01 — Configuração do Projeto

**Estado:** Concluída

**Objetivo:**

Preparar o ambiente de desenvolvimento, compreender a estrutura inicial de uma aplicação React e construir a base sobre a qual o projeto será desenvolvido.

---

# Objetivos da Sprint

Durante esta sprint a equipa concentrou-se em compreender os fundamentos do React antes de iniciar o desenvolvimento das funcionalidades.

Os principais objetivos foram:

- Criar o projeto utilizando Vite.
- Conhecer a estrutura inicial de uma aplicação React.
- Compreender o funcionamento do JSX.
- Identificar o papel do componente principal.
- Construir o primeiro componente da aplicação.

---

# Atividades Realizadas

## 1. Criação do Projeto

O projeto foi criado utilizando:

- React
- Vite
- JavaScript
- ESLint

Durante a criação foram compreendidos os conceitos de:

- Project Name
- Package Name
- Framework
- Variant
- Linter

---

## 2. Estrutura Inicial do Projeto

Foi analisada a estrutura criada automaticamente pelo Vite.

Principais ficheiros estudados:

- main.jsx
- App.jsx
- index.css
- App.css

Também foram identificadas as pastas:

- assets
- public

---

## 3. Compreensão do main.jsx

Foi estudado o papel do ficheiro responsável por iniciar a aplicação.

Conceitos abordados:

- createRoot()
- StrictMode
- import
- export
- ponto de entrada da aplicação

Foi compreendido que o React utiliza o elemento HTML com id="root" como raiz da aplicação.

---

## 4. Compreensão do App.jsx

Foi analisado o componente principal criado automaticamente pelo Vite.

Durante esta análise foram estudados:

- estrutura de um componente React;
- utilização do return;
- renderização da interface;
- importação de ficheiros CSS;
- importação de imagens.

Posteriormente o código de demonstração foi removido para iniciar o desenvolvimento da aplicação.

---

## 5. Introdução ao JSX

Foi realizada uma introdução ao JSX.

Conceitos estudados:

- JSX como extensão de sintaxe do JavaScript;
- diferenças entre HTML e JSX;
- className;
- htmlFor;
- comentários em JSX;
- React Fragments (`<>...</>`).

Também foi compreendida a relação entre componentes React e funções JavaScript.

---

## 6. Limpeza do Projeto

O código de demonstração criado pelo Vite foi removido.

Foi criada uma primeira versão simples da aplicação contendo apenas o título:

Task Flow

Esta etapa marcou o início efetivo do desenvolvimento do produto.

---

## 7. Primeiro Componente

Foi criado o componente:

TaskForm

Responsabilidades definidas:

- apresentar o formulário;
- receber os dados da nova tarefa;
- preparar a futura comunicação com o componente App.

---

## 8. Estrutura Inicial do Formulário

Foi construída a primeira versão estrutural do formulário utilizando JSX.

Elementos criados:

- label do título;
- input do título;
- label da descrição;
- textarea;
- botão "Adicionar".

Nesta fase ainda não foram implementadas funcionalidades ou estados.

---

# Conceitos Aprendidos

Durante esta sprint foram estudados:

- React
- Vite
- JSX
- Componentes
- createRoot()
- StrictMode
- import/export
- Fragment
- HTML semântico
- label
- input
- textarea
- button
- className
- htmlFor

---

# Decisões Técnicas

Durante a sprint foram tomadas as seguintes decisões:

- Utilizar componentes desde o início do projeto.
- Manter o App responsável apenas pela organização da aplicação.
- Criar o componente TaskForm separadamente.
- Utilizar HTML semântico.
- Utilizar textarea para descrições.
- Utilizar input para o título.

---

# Resultado da Sprint

Ao final desta sprint foi obtida:

- aplicação React configurada;
- arquitetura inicial criada;
- primeiro componente implementado;
- formulário estrutural concluído;
- base preparada para introdução dos estados.

---

# Próxima Sprint

## Sprint 02 — Estados e Interatividade

Objetivos:

- Compreender o conceito de estado (State).
- Aprender o Hook useState.
- Tornar o formulário interativo.
- Criar as primeiras tarefas dinamicamente.