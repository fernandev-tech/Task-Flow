# Learning Log

> Anotações pessoais durante o desenvolvimento da To-Do List React.

---

# Índice

5. useState
6. Aplicando useState na Task Flow
7. useState e Hooks
8. Por que importamos o useState?
9. Por que usamos chaves `{}` no import?
10. Comunicação entre componentes

---


# 6. Aplicando useState na Task Flow

O primeiro passo é criar um estado simples no App.jsx para guardar a lista de tarefas, inicialmente vazia.

Antes, a estrutura mental é esta:

```javascript
const [tasks, setTasks] = useState([])
```

Lê-se assim:

* “React, cria um estado chamado tasks, que começa como uma lista vazia. Quando eu quiser alterá-lo, vou usar a função setTasks.”

As três partes:

* tasks: o valor atual. Mais tarde será algo como:

```javascript
[
  {
    id: 1,
    title: "Estudar React"
  }
]
```

* setTasks: a função obrigatória para atualizar tasks.
* []: valor inicial; uma lista vazia, pois a aplicação inicia sem tarefas.

## Como usar useState?

Primeiro: Importar

```javascript
import { useState } from 'react'
```

Segundo: Declarar o estado.

```javascript
const [tasks, setTasks] = useState([])
```

---

# 7. useState e Hooks

O useState é uma função. Ele devolve um array.

E quando usamos

```javascript
useState([])
```

Estamos chamando a função.

## Hook

Um Hook é uma função especial do React que permite utilizar funcionalidades do React dentro de componentes funcionais.

O useState é um Hook.

Todos os Hooks começam com:

```text
use
```

Exemplos:

```text
useState

useEffect

useRef

useContext

useMemo
```

Sempre começam com:

```text
use...
```

---

# 8. Por que importamos o useState?

Quem criou a função useState?

```javascript
import { useState } from 'react'
```

Foi o React.

Então, antes de a usares, tens de dizer:

> "React, traz essa função para este ficheiro."

É exatamente isso que o import faz.

Por exemplo eu crio

```text
TaskForm.jsx
```

Depois, no App, faço:

```javascript
import TaskForm from './components/TaskForm'
```

Por quê?

Porque o componente está noutro ficheiro.

O useState também está noutro "lugar": dentro da biblioteca React.

Então fazemos:

```javascript
import { useState } from 'react'
```

A lógica é a mesma.

---

# 9. Por que usamos chaves {} no import?

```javascript
import TaskForm from './components/TaskForm'
```

Sem chaves.

Mas:

```javascript
import { useState } from 'react'
```

Com chaves.

A razão é que existem dois tipos principais de exportação em JavaScript.

## Exportação padrão (default export)

Exemplo:

```javascript
export default TaskForm
```

Importamos assim:

```javascript
import TaskForm from './components/TaskForm'
```

## Exportação nomeada (named export)

O React exporta várias funções com nome.

Por exemplo:

* useState
* useEffect
* useRef

Então escolhemos quais queremos importar:

```javascript
import { useState } from 'react'
```

Se amanhã precisares de outro Hook:

```javascript
import { useState, useEffect } from 'react'
```

Estamos a dizer:

> "React, traz-me estas funções específicas."

