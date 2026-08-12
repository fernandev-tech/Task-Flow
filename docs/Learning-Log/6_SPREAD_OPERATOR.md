# Learning Log — Spread Operator (`...`) em JavaScript

## Contexto

Durante o desenvolvimento do **Task Flow**, cheguei a uma parte em que precisava utilizar o `spread operator` (`...`).

Eu ainda não conhecia esse conceito em JavaScript. Antes disso, tinha estudado o método `map()` utilizando exemplos com números, como:

```js
const numbers = [10, 20, 30]

const doubled = numbers.map(number => {
    return number * 2
})

console.log(doubled)
```

Por isso, quando encontrei `...` no código do Task Flow, percebi que precisava parar e entender o conceito antes de simplesmente copiar a sintaxe.

---

# 1. O que é o Spread Operator?

O `spread operator` é representado por três pontos:

```js
...
```

A palavra `spread` significa **espalhar**.

A ideia inicial que devo guardar é:

> **O spread operator pega o conteúdo de uma estrutura e o espalha no lugar onde estamos utilizando `...`.**

Ele pode ser utilizado principalmente com:

* Arrays
* Objetos

A ideia é semelhante nos dois casos, mas o que é espalhado é diferente.

Com arrays:

```js
[...array]
```

espalhamos os **elementos**.

Com objetos:

```js
{...object}
```

espalhamos as **propriedades**.

---

# 2. Spread Operator com Arrays

Primeiro temos um array:

```js
const numbers = [10, 20, 30]
```

Podemos criar outro array usando:

```js
const newNumbers = [...numbers]
```

O `...numbers` significa:

> Pegue os elementos que estão dentro de `numbers` e espalhe-os aqui.

Portanto, mentalmente:

```js
[...numbers]
```

é como:

```js
[10, 20, 30]
```

O resultado é:

```js
[10, 20, 30]
```

## Visualização

```text
numbers
   ↓
[10, 20, 30]

...numbers
   ↓
10, 20, 30

[...numbers]
   ↓
[10, 20, 30]
```

---

# 3. Usando Spread para adicionar elementos a um Array

Podemos utilizar o spread para criar um novo array contendo os elementos antigos e novos elementos.

Por exemplo:

```js
const numbers = [10, 20, 30]

const newNumbers = [...numbers, 40]
```

O JavaScript pode ser entendido mentalmente assim:

```text
...numbers
    ↓
10, 20, 30

+ 40
```

Resultado:

```js
[10, 20, 30, 40]
```

Também podemos colocar o novo elemento antes:

```js
const newNumbers = [5, ...numbers]
```

Resultado:

```js
[5, 10, 20, 30]
```

Portanto, o spread permite utilizar os elementos de um array existente para construir outro array.

---

# 4. Spread Operator com Objetos

O spread também funciona com objetos.

Temos:

```js
const task = {
    id: 1,
    title: "Practice English",
    description: "Study English"
}
```

Podemos fazer:

```js
const newTask = {
    ...task
}
```

Nesse caso:

```js
...task
```

significa:

> Pegue as propriedades que estão dentro de `task` e espalhe-as neste novo objeto.

Mentalmente:

```js
{
    ...task
}
```

é como:

```js
{
    id: 1,
    title: "Practice English",
    description: "Study English"
}
```

---

# 5. Adicionando uma nova propriedade

Podemos espalhar um objeto e depois adicionar uma nova propriedade.

Por exemplo:

```js
const task = {
    id: 1,
    title: "Practice English"
}

const newTask = {
    ...task,
    favorite: false
}
```

Primeiro:

```js
...task
```

espalha:

```js
id: 1
title: "Practice English"
```

Depois adicionamos:

```js
favorite: false
```

Resultado:

```js
{
    id: 1,
    title: "Practice English",
    favorite: false
}
```

A ideia pode ser representada assim:

```text
PEGAR TUDO DE task
        ↓
     ...task
        ↓
ADICIONAR favorite
        ↓
NOVO OBJETO
```

---

# 6. Alterando uma propriedade usando Spread

Uma das utilizações mais importantes é criar um novo objeto mantendo as propriedades antigas, mas alterando uma delas.

Temos:

```js
const task = {
    id: 1,
    title: "Practice English",
    description: "Study English"
}
```

Queremos alterar apenas o título.

Podemos fazer:

```js
const updatedTask = {
    ...task,
    title: "Study JavaScript"
}
```

O spread primeiro coloca as propriedades existentes:

```js
{
    id: 1,
    title: "Practice English",
    description: "Study English"
}
```

Depois encontramos:

```js
title: "Study JavaScript"
```

Como `title` já existia, o novo valor substitui o antigo.

Resultado:

```js
{
    id: 1,
    title: "Study JavaScript",
    description: "Study English"
}
```

Isso será especialmente importante no React, porque frequentemente precisamos criar um novo objeto de estado mantendo os dados anteriores e alterando apenas uma propriedade.

---

# 7. Aplicando ao Array `tasks` do Task Flow

No Task Flow, tenho uma estrutura semelhante a esta:

```js
const tasks = [
    {
        id: 1,
        title: "Practice English",
        description: "Study english at 9 pm"
    }
]
```

Aqui temos:

```text
tasks
 ↓
[
    task
]
```

E cada `task` é um objeto:

```text
task
 ↓
{
    id,
    title,
    description
}
```

Agora imagine que criamos uma nova tarefa:

```js
const newTask = {
    id: 2,
    title: "Study JavaScript",
    description: "Study map and spread"
}
```

Queremos colocar essa nova tarefa junto das tarefas que já existem.

Podemos fazer:

```js
const updatedTasks = [
    ...tasks,
    newTask
]
```

O `...tasks` significa:

> Pegue todas as tarefas que já estão dentro de `tasks` e espalhe-as neste novo array.

Depois colocamos:

```js
newTask
```

Portanto:

```js
[
    ...tasks,
    newTask
]
```

pode ser entendido mentalmente como:

```text
PEGUE AS TASKS EXISTENTES
        ↓
      ...tasks
        ↓
   task 1, task 2...
        ↓
ADICIONE newTask
        ↓
NOVO ARRAY DE TASKS
```

Se antes tivéssemos:

```js
[
    task1
]
```

e `newTask` fosse `task2`, o resultado seria:

```js
[
    task1,
    task2
]
```

---

# 8. Ligação com `useState` no React

No Task Flow, o estado pode ser algo parecido com:

```js
const [tasks, setTasks] = useState([])
```

Inicialmente:

```text
tasks
 ↓
[]
```

Quando o usuário cria uma tarefa:

```js
const newTask = {
    id: 1,
    title: "Practice English",
    description: "Study English at 9 pm"
}
```

Podemos atualizar o estado assim:

```js
setTasks([
    ...tasks,
    newTask
])
```

O pensamento é:

```text
Antes:

tasks
 ↓
[]
```

Depois:

```text
...tasks
 ↓
[]
```

E adicionamos:

```text
newTask
 ↓
Task 1
```

Resultado:

```text
tasks
 ↓
[
    Task 1
]
```

Se depois adicionarmos outra:

```text
tasks
 ↓
[
    Task 1
]
```

e:

```text
newTask
 ↓
Task 2
```

então:

```js
setTasks([
    ...tasks,
    newTask
])
```

produz:

```text
[
    Task 1,
    Task 2
]
```

A cada nova tarefa, o array anterior é utilizado para construir o novo array.

---

# 9. Por que isso é importante no React?

No React, é muito comum trabalharmos com estados que são arrays e objetos.

Por exemplo:

```js
const [tasks, setTasks] = useState([])
```

Quando quero adicionar uma tarefa, posso fazer:

```js
setTasks([
    ...tasks,
    newTask
])
```

Estou dizendo:

> "Pegue as tarefas que já existem, espalhe-as em um novo array e acrescente a nova tarefa."

Quando quero atualizar uma propriedade de uma tarefa, a ideia também pode envolver spread:

```js
const updatedTask = {
    ...task,
    title: "Novo título"
}
```

Assim, mantenho as outras propriedades e altero somente `title`.

---

# 10. Diferença entre `map()` e Spread

Como eu tinha acabado de aprender `map()`, inicialmente poderia confundir os dois.

Mas eles têm funções diferentes.

## `map()`

O `map()` percorre um array e produz um novo array a partir dos elementos.

Exemplo:

```js
const numbers = [10, 20, 30]

const doubled = numbers.map(number => {
    return number * 2
})
```

O pensamento é:

> **"Percorra os elementos e transforme cada um."**

Resultado:

```js
[20, 40, 60]
```

---

## Spread `...`

O spread espalha o conteúdo de uma estrutura em outro lugar.

Exemplo:

```js
const numbers = [10, 20, 30]

const newNumbers = [...numbers, 40]
```

O pensamento é:

> **"Pegue os elementos que já existem e espalhe-os aqui."**

Resultado:

```js
[10, 20, 30, 40]
```

Portanto:

```text
map()
 ↓
Percorrer / transformar

spread ...
 ↓
Espalhar conteúdo
```

---

# 11. A diferença entre Array e Objeto

Esta é uma distinção importante.

## Com Array

```js
const tasks = [task1, task2]

const newTasks = [...tasks, task3]
```

O spread está espalhando os **elementos**:

```text
...tasks
 ↓
task1, task2
```

Resultado:

```js
[task1, task2, task3]
```

## Com Objeto

```js
const task = {
    id: 1,
    title: "Practice English"
}

const updatedTask = {
    ...task,
    favorite: false
}
```

O spread está espalhando as **propriedades**:

```text
...task
 ↓
id
title
```

Resultado:

```js
{
    id: 1,
    title: "Practice English",
    favorite: false
}
```

---

# 12. Minha principal conclusão

O conceito de `spread operator` ainda é novo para mim. Eu consigo compreender a ideia básica, mas ainda não sinto que tenho domínio completo do conceito.

A ideia que consegui entender é:

```js
...
```

significa, neste contexto:

> **"Pegue o conteúdo desta estrutura e espalhe-o no lugar onde estou usando."**

Com arrays:

```js
[...tasks]
```

significa:

> Espalhar os elementos de `tasks`.

Com objetos:

```js
{...task}
```

significa:

> Espalhar as propriedades de `task`.

No Task Flow, isso será útil principalmente para trabalhar com o estado de `tasks`, por exemplo:

```js
setTasks([
    ...tasks,
    newTask
])
```

que significa:

> Manter as tarefas existentes e adicionar a nova tarefa em um novo array.

---
