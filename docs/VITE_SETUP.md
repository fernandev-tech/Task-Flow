# Configuração Inicial do Projeto com Vite

## Projeto

**Nome:** Task Flow

**Tecnologia principal:** React

**Ferramenta de criação:** Vite

**Data da configuração:** 2026-07-28

---

# Objetivo

Criar a base inicial da aplicação Task Flow utilizando React através do Vite.

Esta etapa corresponde ao início da Sprint 1, onde o objetivo é configurar o ambiente de desenvolvimento antes da implementação das funcionalidades.

---

# Comando utilizado

```bash
npm create vite@latest
```

## Explicação do comando

### npm

Node Package Manager.

É o gestor de pacotes do ecossistema JavaScript.

Responsável por:

- instalar dependências;
- executar comandos;
- gerir bibliotecas do projeto.

---

### create

Indica ao npm que queremos criar um novo projeto.

---

### vite

Define que será utilizado o Vite como ferramenta de criação e desenvolvimento.

---

### @latest

Indica que queremos utilizar a versão mais recente disponível do Vite.

---

# Escolhas realizadas durante a configuração

## Project Name

Escolha:

```
Task-Flow
```

## Motivo

Nome escolhido para representar uma aplicação moderna de gestão de tarefas.

O nome transmite a ideia de organização e fluxo de produtividade.

---

# Package Name

Escolha:

```
task-flow
```

## Motivo

O package name é utilizado pelo npm para identificar o projeto.

Seguindo as convenções:

- letras minúsculas;
- sem espaços;
- utilização de hífen para separar palavras.

---

# Framework escolhido

Escolha:

```
React
```

## Motivo

React foi escolhido porque:

- permite criar interfaces através de componentes;
- é uma tecnologia utilizada no mercado;
- será o foco de aprendizagem deste projeto.

---

# Variante escolhida

Escolha:

```
JavaScript
```

## Motivo

O objetivo principal desta versão é consolidar React e os seus conceitos fundamentais.

Não foi escolhido TypeScript neste momento porque será estudado posteriormente.

Também não foi escolhido React Compiler porque o foco inicial é compreender o funcionamento tradicional do React.

---

# Linter escolhido

Escolha:

```
ESLint
```

## O que é um linter?

Um linter é uma ferramenta que analisa o código procurando:

- possíveis erros;
- más práticas;
- problemas de organização;
- padrões inconsistentes.

---

## Motivo da escolha

ESLint foi escolhido porque:

- possui grande adoção no ecossistema JavaScript;
- é muito utilizado em projetos profissionais;
- possui grande comunidade;
- funciona bem com React.

---

# Instalação das dependências

Durante a criação do projeto foi escolhida a opção:

```
Install with npm and start now
```

O Vite instalou automaticamente as dependências necessárias.

Resultado:

```
added 135 packages
found 0 vulnerabilities
```

---

# Inicialização do servidor

O Vite iniciou automaticamente o servidor de desenvolvimento.

Comando executado internamente:

```bash
npm run dev
```

Resultado:

```
VITE v8.1.5 ready
```

Aplicação disponível em:

```
http://localhost:5173/
```

---

# Atalhos do servidor Vite

Durante a execução do servidor:

## Reiniciar servidor

```
r + Enter
```

## Mostrar URL

```
u + Enter
```

## Abrir no navegador

```
o + Enter
```

## Limpar consola

```
c + Enter
```

## Sair do servidor

```
q + Enter
```

---

# Resultado

O ambiente inicial do Task Flow foi criado com sucesso.

Configuração final:

| Item | Escolha |
|---|---|
| Framework | React |
| Build Tool | Vite |
| Linguagem | JavaScript |
| Linter | ESLint |
| Package Manager | npm |
| Persistência futura | Local Storage |
| Deploy futuro | Vercel |

---

# Próximos passos

- Analisar a estrutura criada pelo Vite.
- Compreender cada ficheiro.
- Limpar código inicial.
- Criar arquitetura de componentes.
- Iniciar implementação da interface.