# Learning Log - Peristência

# 1. O que queremos agora?

Queremos que aconteça isto:
```bash

                    ┌───────────────┐
                    │  localStorage │
                    └───────▲───────┘
                            │
                            │
React                       │
  │                         │
  ▼                         │
useState ───────────────► salvar
  │
  ▼
tasks
  │
  ▼
interface
```
E quando a aplicação começar novamente:

```bash

localStorage
     │
     │ ler
     ▼
  React
     │
     ▼
  tasks
     │
     ▼
 interface
 ```

Então o objetivo é:

O useState continua sendo o estado que controla a interface. O localStorage será o lugar onde persistimos os dados para eles sobreviverem ao recarregamento.

# 2. O que é localStorage?

localStorage é um recurso/API do navegador que permite guardar pequenas quantidades de dados no computador do utilizador para que esses dados continuem disponíveis depois de recarregar a página.

Ou ainda mais curta:

É uma API do navegador que permite guardar dados no armazenamento local do navegador.

Por exemplo:

```JSON
localStorage.setItem("nome", "Fernando")
```

Depois podemos ler:

```JSON
localStorage.getItem("nome")
```

Mas há uma pegadinha importante:

localStorage trabalha com strings.

E tasks é:

```JS
[
    {
        id: 123,
        title: "Estudar React",
        completed: false
    }
] 
```

Isso é um array de objetos, não uma string.

Então vamos precisar aprender a transformar:

```bash
objeto/array
      ↓
 JSON
      ↓
 string
      ↓
localStorage
```

e depois fazer o caminho inverso:

```bash
localStorage
      ↓
 string
      ↓
 JSON
      ↓
array de objetos
      ↓
tasks

E aí sim teremos persistência.
```

# 2.1 Estudando o LocalStorage

Pensa nele como uma pequena "caixa" pertencente ao nosso site:

```bash
┌─────────────────────────┐
│      localStorage       │
│                         │
│  "alguma chave"         │
│       ↓                 │
│  "algum valor"          │
└─────────────────────────┘
```

E o JavaScript consegue colocar e retirar coisas dessa caixa.

## 2.1.1 Como colocamos alguma coisa lá?

Temos:

```JSON
localStorage.setItem()
```

setItem significa aproximadamente:

**"define/guarda um item no localStorage."**

Ele recebe dois valores:

```JSON
localStorage.setItem(chave, valor)
```

Por exemplo:

```JSON
localStorage.setItem("nome", "Fernando")
```

Aqui:

"nome"      → chave
"Fernando"  → valor

Podemos imaginar:

```bash
localStorage

┌─────────────────────────┐
│ nome → "Fernando"       │
└─────────────────────────┘
```

## 2.1.2 E como pegamos o valor?

Usamos:

```JS
localStorage.getItem()
```

Por exemplo:

```JS
const nome = localStorage.getItem("nome")
```

Estamos dizendo:

"Procura no localStorage o item cuja chave é nome e devolve o valor."

Então:

```JS
localStorage.setItem("nome", "Fernando")

const nome = localStorage.getItem("nome")
```

Agora:

```JS
nome
```

contém:

```JS
"Fernando"
```
## 2.1.3 Problema encontrado

Poderíamos pensar:

```JS
localStorage.setItem("tasks", tasks)
```

E pronto.

Mas não funciona como queremos.

Por quê?

Porque nosso ```tasks``` não é uma string.

É:

```JS
[
    {
        id: 123,
        title: "Estudar React",
        description: "Aprender useState",
        favorite: true,
        completed: false
    }
]
```

Temos:

```bash
Array
 ↓
Objetos
 ↓
Propriedades
 ↓
Valores
```

Enquanto o localStorage trabalha com strings.

Então precisamos de uma ponte.

E essa ponte é o ```JSON.```

## 2.1.4 JSON

JSON significa:

JavaScript Object Notation

É uma forma padronizada de representar dados estruturados como texto.

Por exemplo, temos um objeto JavaScript:

```bash
const task = {
    title: "Estudar React",
    completed: false
}
```

Podemos transformar esse objeto em uma string JSON usando:

```JS
JSON.stringify(task)
```

O resultado será algo parecido com:

```JS
'{"title":"Estudar React","completed":false}'
```

Percebe a diferença?

Antes:

```JS
{
    title: "Estudar React",
    completed: false
}
```

Depois:

```JS
'{"title":"Estudar React","completed":false}'
```

Agora temos texto.

E texto pode ser guardado no localStorage.

### Então a viagem será:

```JS
tasks
 ↓
JSON.stringify()
 ↓
string JSON
 ↓
localStorage
```

Por exemplo:

```JS
localStorage.setItem("tasks", JSON.stringify(tasks))
```
Leitura:

"Pega o meu ```tasks```, transforma em texto JSON e guarda esse texto no localStorage com a chave ```tasks```."

JSON.stringify não guarda nada.

Ele apenas transforma o dado em uma string.

Quem guarda é:

```bash
localStorage.setItem()
```
### E quando quisermos recuperar?

Acontece o caminho contrário.

Primeiro:

```JS
localStorage.getItem("tasks")
```

Isso nos devolve uma string.

Mas nós queremos novamente:

```JS
[
    {
        ...
    }
]
```

Então usamos:

```JS
JSON.parse()
```

Por exemplo:

```JS
const tasks = JSON.parse(
    localStorage.getItem("tasks")
)
```

A viagem fica:

```bash
localStorage
     ↓
getItem()
     ↓
string JSON
     ↓
JSON.parse()
     ↓
array de objetos
     ↓
tasks
```

## 2.1.4 Resumo básico

Importante entender essas funções

São praticamente irmãs:

```JS
JSON.stringify()
JavaScript
   ↓
string JSON
```

Usamos quando queremos guardar.

```JS
JSON.parse()
string JSON
   ↓
JavaScript
```

Usamos quando queremos recuperar.

Pensa assim:

```bash
STRINGIFY
"Transforma em string"

PARSE
"Interpreta a string e transforma novamente em dado JavaScript"
```

Então:

```bash
              SALVAR

tasks
  ↓
JSON.stringify()
  ↓
string
  ↓
localStorage.setItem()
```
e:
```bash

              RECUPERAR

localStorage.getItem()
  ↓
string
  ↓
JSON.parse()
  ↓
tasks
```
# 2.2 useEffect

Uma forma simples de pensar nele inicialmente é:

useEffect permite executar um efeito quando algo que estamos observando muda.

O problema é: quando exatamente devemos salvar?

Se colocarmos isto simplesmente dentro do componente:

```JS
localStorage.setItem("tasks", JSON.stringify(tasks))
```

não queremos que o React fique executando isso de qualquer maneira durante cada renderização.

É aqui que entra o próximo conceito:

⚛️ useEffect

No nosso caso:

```bash
tasks muda
   ↓
useEffect percebe
   ↓
executa o código
   ↓
salva tasks no localStorage
```

A relação será:

```Graphic
┌─────────────┐
│   tasks     │
│   useState  │
└──────┬──────┘
       │
       │ mudou
       ▼
┌─────────────┐
│  useEffect  │
└──────┬──────┘
       │
       ▼
JSON.stringify(tasks)
       │
       ▼
localStorage
```

Então vamos usar o useEffect para resolver este problema:

"Toda vez que tasks mudar, salva a versão atual no localStorage."

```bash
favorite: false
       ↓
favorite: true

Ao concluir:

completed: false
       ↓
completed: true

Ao eliminar:

[task1, task2, task3]
       ↓
[task1, task3]

Ao adicionar:

[task1, task2]
       ↓
[task1, task2, task3]
```

## 2.2.1 Usando o useEffect

### Sintaxe

```JS
useEffect(() => {

}, [tasks])
```
Aqui temos arrow function

```JS
() => {

}
```

Essa função é o efeito que o React vai executar.

E depois temos:

```JS
[tasks]
```

**Esse array é chamado de array de dependências.**

Ele está dizendo ao React:

"Este efeito depende de tasks."

Então, quando tasks mudar:

```bash
tasks muda
   ↓
React percebe
   ↓
useEffect executa
```

O map() trabalha sobre os dados.

O useEffect controla quando determinado código deve ser executado em resposta a mudanças.

São responsabilidades completamente diferentes.

### Fluxo para Recuperar Tarefas

App começa
   ↓
useEffect(..., [])
   ↓
buscar dados do localStorage
   ↓
savedTasks
   ↓
"Existe algum dado?"
   ↓
if (savedTasks)
   ↓
JSON.parse()
   ↓
volta a ser array de objetos
   ↓
setTasks(...)
   ↓
React renderiza as tarefas



Ela começa normalmente com:

const [tasks, setTasks] = useState([])

Ou seja:

App começa
   ↓
tasks = []

Depois o useEffect vai ao localStorage, encontra os dados guardados e coloca esses dados no estado.

Então:

tasks começa como []
        ↓
localStorage tem tarefas?
        ↓
SIM
        ↓
JSON.parse()
        ↓
setTasks(tarefasRecuperadas)
        ↓
tasks passa a ter as tarefas