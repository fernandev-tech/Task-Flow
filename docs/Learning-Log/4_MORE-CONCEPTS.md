# Learning Log

> Anotações pessoais durante o desenvolvimento da To-Do List React.

---

# Índice

1. Renderização Condicional
2. Fluxo ógico para criar tarefas
3. Construtores Usados


---

# 1. Renderização Condicional

## Exemplo condicional para apresentar tarefas no JS puro

Se fosse no JavaScript  a condição poderia ser assim:

```JavaScript
const tasks = [
{
id: 1,
title: "React",
descrption: "Estudar Hooks",
favorite: false
},

{
    id: 1,
    title: "Inglês",
    descrption: "Praticar verbo to get",
    favorite: false
}

]

if (tasks.length == 0) {
console.log("Ainda se tarefas")
}else{
console.log(tasks)
}
```
---

## Como acontece a Renderização condicional no React


```JavaScript
if (tasks.length === 0) {
    console.log("Ainda sem tarefas")
} else {
    console.log(tasks)
}
```
O React vai fazer praticamente a mesma decisão.

A diferença é que, em vez de escrever:

```JavaScript
console.log("Ainda sem tarefas")
```

vamos dizer ao React:

"Renderiza este JSX."

E em vez de:

```JavaScript
console.log(tasks)
```

vamos dizer:

"Renderiza outro JSX."

### Como aplicar a renderização condicional no React

```JavaScript
if (tasks.length === 0) {
    console.log("Ainda sem tarefas")
}
```

No JavaScript isso funciona.

Mas no React não funciona.

Por que?

Porque um ```if``` é uma instrução (statement).

Já

```HTML
<p>Ainda sem tarefas</p>
```
é uma expressão JSX que precisa de ser devolvida pelo ```return```.

Então surge um problema.

Como é que decidimos mostrar um JSX ou outro?

Para isso, o React usa:

**O operador ternário**

```JavaScript
condição ? valor1 : valor2
```

Em vez de escrever 

```JavaScript
if (...) {

} else {

}
```

escrevemos uma expressão.

E JSX aceita expressões.

Algo como isso:

```JavaScript
return (
    <>
        {tasks.length === 0
            ? <p>Ainda sem tarefas</p>
            : <ul>Lista de tarefas...</ul>
        }
    </>
)
```
Podes ler assim:

```bash
- Se tasks.length for igual a 0,
- mostra <p>Ainda sem tarefas</p>,
- senão mostra <ul>Lista de tarefas...</ul>.
```

É a mesma lógica que em JavaScript:

```
if (tasks.length === 0) {
    console.log("Ainda sem tarefas")
} else {
    console.log(tasks)
}
```

A única diferença é que, em vez de mostrar algo na consola, estamos a mostrar elementos da interface.


```JavaScript
function TaskList({ tasks }) {

    return (
        <>
            {
                tasks.length === 0
                    ? <p>Ainda sem tarefas</p>
                    : <ul>
                        Lista de tarefas
                    </ul>
            }
        </>

    )
}
export default TaskList
```

## Usando o Key

Temos:

```JavaScript
const tasks = [
    {
        id: 1,
        title: "React"
    },
    {
        id: 2,
        title: "JavaScript"
    },
    {
        id: 3,
        title: "Inglês"
    }
]
```

Quando fazemos

```JavaScript
tasks.map(task => (
    <TaskCard
        key={task.id}
        task={task}
    />
))
```

Na primeira passagem do map:

```JavaScript
task
```

é:

```JavaScript
{
    id: 1,
    title: "React"
}
```

Então:

```JavaScript
key={task.id}
```

vira:

```JavaScript
key={1}
```

Na segunda:

```JavaScript
key={2}
```

Na terceira:

```JavaScript
key={3}
```

Ou seja:

```JavaScript
TaskCard → key 1 → React
TaskCard → key 2 → JavaScript
TaskCard → key 3 → Inglês
```

### Então o que é task.id?

É simplesmente:

"Pegue o id desta tarefa."

Lembra que task é um objeto?

```JavaScript
task = {
    id: 1,
    title: "React"
}
```

Então:

```JavaScript
task.id
```

significa:

acessar a propriedade id do objeto task.

Isso é JavaScript puro. Não é uma coisa especial do React.

O que é especial do React é o uso de:

```JavaScript
key={...}
```

para identificar cada elemento quando renderizamos uma lista.

## O TaskForm precisa dos dados que o utilizador digitou. Como ele pode avisar o App que alguém clicou em "Adicionar"?

Quando chamamos setTasks, estamos a atualizar o estado. Ao perceber essa alteração de estado, o React renderiza novamente os componentes que dependem desse estado.

---
