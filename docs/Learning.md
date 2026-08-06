# Learning Log

## O que é o React
----------------------------------

React não é um framework.

React é uma biblioteca JavaScript.

"Mas qual é a diferença?"

Boa pergunta.
--------------------------------

*Biblioteca*

Uma biblioteca ajuda-te a resolver um problema específico.

Neste caso:

Criar interfaces de utilizador (UI).

Ela não tenta controlar toda a tua aplicação.

Tu decides como organizar o projeto.
-------------------------------------

**Framework**

Um framework já vem com várias decisões tomadas.

Ele diz:

como criar páginas;
como organizar pastas;
como fazer rotas;
como trabalhar com servidor.

Exemplos:

Next.js
Angular
Nuxt

O React apenas diz:

"Eu trato da interface."

**Definição oficial**

React é uma biblioteca JavaScript para construir interfaces de utilizador através de componentes reutilizáveis.

-------------------------------------

📚 2. O que é JSX?

Imagina JavaScript puro.

Para criar isto:

<h1>Olá Fernando</h1>

Sem React terias de escrever algo semelhante a:

const h1 = document.createElement("h1");
h1.textContent = "Olá Fernando";

Ou, internamente, o React poderia criar um elemento com algo equivalente a:

React.createElement("h1", null, "Olá Fernando");

Concordas comigo?

É muito mais trabalhoso.

Então a equipa do React pensou:

"E se deixássemos o programador escrever algo parecido com HTML?"

Nasceu o JSX.

Com JSX escrevemos:

<h1>Olá Fernando</h1>

Muito mais limpo.

Mas há uma coisa muito importante.

⚠️ Isto não é HTML.

Parece HTML.

Mas não é.

Quando clicamos em Run, o Vite (através do compilador) transforma isto em JavaScript.

Ou seja:

<h1>Olá Fernando</h1>

vira algo equivalente a:

React.createElement(...)

É por isso que dizemos:

JSX é uma sintaxe.

Não é uma nova linguagem.

Então porque misturar HTML com JavaScript?

Excelente pergunta.

Antes do React fazíamos isto:

HTML

<h1></h1>

JavaScript

document.querySelector(...)

CSS

h1 {
 ...
}

Tudo separado.

Mas repara.

Quem controla o título?

O JavaScript.

Então por que o HTML está num ficheiro e a lógica noutro?

A equipa do React respondeu:

"Vamos colocar a interface e a lógica do componente no mesmo lugar."

É por isso que JSX existe.

Não porque seja "mais bonito".

Mas porque a interface depende da lógica.

________________________

📚 Como definir JSX?

Agora que compreendeste a ideia, eu daria esta definição:

JSX (JavaScript XML) é uma extensão de sintaxe do JavaScript que permite escrever interfaces utilizando uma sintaxe semelhante ao HTML dentro do código JavaScript. Durante a compilação, o JSX é transformado em JavaScript que o React consegue interpretar.

Se o professor pedir uma resposta mais simples:

JSX é uma sintaxe que permite escrever a interface de uma aplicação React de forma parecida com HTML, diretamente dentro do JavaScript.



Outra definição:

JSX é uma extensão de sintaxe do JavaScript que permite escrever uma estrutura semelhante ao HTML dentro do código JavaScript, facilitando a criação de interfaces no React.
--------------------------------------------

📚 3. O que é um componente?

Um componente é uma parte independente da interface que possui uma responsabilidade específica e pode ser reutilizada em diferentes partes da aplicação.

Imagina um carro.

Um carro possui:

volante;
portas;
pneus;
motor.

Cada peça possui uma responsabilidade.

Não faz sentido colocar tudo numa única peça gigante.

React faz exatamente isso
-------------------------------------

📚 4. O que é Vite?

Vite é uma ferramenta de desenvolvimento (build tool) que ajuda a criar e executar aplicações web modernas.

Ele faz várias coisas:

cria o projeto;
inicia um servidor de desenvolvimento;
atualiza a página quase instantaneamente quando alteras o código;
prepara a aplicação para produção.
Então porque usamos Vite?

Porque queremos uma excelente experiência de desenvolvimento.

Ele é:

muito rápido;
simples de configurar;
moderno;
amplamente adotado pela comunidade.

___________________________________________
## UseState

const [tasks, setTasks] = useState([]);

O tasks é uma variável.

É uma variável de estado (state variable).

Por isso podemos dizer:

tasks é a variável de estado que guarda a lista atual de tarefas.

Ou, de forma mais curta:

tasks representa o estado atual das tarefas.

---------------

"setTasks é a função que altera quando o valor do estado muda e avisa ao React para atualizar a interface."

## Aplicando useState na Task Flow

O primeiro passo é criar um estado simples no App.jsx para guardar a lista de tarefas, inicialmente vazia.

  Antes, a estrutura mental é esta:

```bash
  const [tasks, setTasks] = useState([])
  ```

  Lê-se assim:

  - “React, cria um estado chamado tasks, que começa como uma lista vazia. Quando eu quiser alterá-lo, vou usar a função setTasks.”

  As três partes:

  - tasks: o valor atual. Mais tarde será algo como:

```
    [
      { id: 1,
       title: 'Estudar React' }
    ]
```
  - setTasks: a função obrigatória para atualizar tasks.
  - []: valor inicial; uma lista vazia, pois a aplicação inicia sem tarefas.

  ## Como usar useState?

  - Primeiro: Importar
  ```
  import { useState } from 'react'
  ```

  - Segundo: Declarar o estado.

```
   const [tasks, setTasks] = useState([])
```
## useState E Hooks

O useState é uma função. Ele devolve um array.
E quando usamos 

```bash
useState([])
```
Estamos chamando a função.

### Hook

Um Hook é uma função especial do React que permite utilizar funcionalidades do React dentro de componentes funcionais.

O useState é um **Hook**.

Todos os Hooks começam com:

```
use
``` 
Exemplos:

```
useState

useEffect

useRef

useContext

useMemo
```

Sempre começam com:

use...

### Por que importamos O useState?

Quem criou a função useStae?

```
import { useState } from 'react'
```

Foi o React.

Então, antes de a usares, tens de dizer:

"React, traz essa função para este ficheiro."

É exatamente isso que o import faz.

Por exemplo eu crio 

```
TaskForm.jsx
```
Depois, no App, faço:

```
import TaskForm from './components/TaskForm'
```

Por quê?

Porque o componente está noutro ficheiro.

O useState também está noutro "lugar": dentro da biblioteca React.

Então fazemos:

```
import { useState } from 'react'
```
A lógica é a mesma.

### Por que usamos chaves {} no import?

```
import TaskForm from './components/TaskForm'
```

Sem chaves.

Mas:

```
import { useState } from 'react'
```

Com chaves.

A razão é que existem dois tipos principais de exportação em JavaScript:

**Exportação padrão (default export)**

Exemplo:

```
export default TaskForm
```
Importamos assim:

```
import TaskForm from './components/TaskForm'
```

**Exportação nomeada (named export)**

O React exporta várias funções com nome.

Por exemplo:

- useState
- useEffect
- useRef

Então escolhemos quais queremos importar:

```
import { useState } from 'react'
```

Se amanhã precisares de outro Hook:

```
import { useState, useEffect } from 'react'
```

Estamos a dizer:

"React, traz-me estas funções específicas."