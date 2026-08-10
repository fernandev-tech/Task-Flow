# 9. Comunicação entre componentes

## Como é que o useState vai pegar as tarefas e como o TaskList vai apresentar essas tarefas?

1. Primeiro: onde vivem as tarefas?

Hoje temos isto:

```JavaScript
function App() {

  const [tasks, setTasks] = useState([])

  return (
    <>
      <Header />
      <main>
        <TaskForm />
        <TaskList />
      </main>
    </>
  )
}
```

O React olha para isto e pensa:

"Ok, existe um estado chamado tasks."

Neste momento:

```JavaScript
tasks = []
```

Ou seja:

```JavaScript
tasks = []
```

Uma lista vazia.

Não há tarefas.

É como uma folha de papel vazia.

2. Então por que criámos esse estado se não existem tarefas?

Porque a aplicação vai mudar.

Hoje:

```JavaScript
tasks = []
```

Amanhã o utilizador preenche:

Título:

Estudar React

Descrição:

Aprender props

Clica:

Adicionar

Agora precisamos transformar:

Antes:
```JavaScript
[]
```

Depois:

```JavaScript
[
 {
   id: 1,
   title: "Estudar React",
   description: "Aprender props"
 }
]
```

Quem vai guardar essa nova informação?

O estado:

```bash
tasks
```

3. Quem precisa conhecer essa lista?

Vamos olhar para a responsabilidade dos componentes:

**App**

Responsabilidade:

"Controlar os dados principais da aplicação."

Então:

```JavaScript
tasks
```

fica aqui.

```JavaScript
TaskList
```
Responsabilidade:

"Mostrar todas as tarefas."

Mas para mostrar precisa perguntar:

"Quais tarefas existem?"

Ela precisa receber:

```JavaScript
[
 {
  title: "Estudar React"
 }
]
```
Então a comunicação é:

App

Tenho a lista:

```JavaScript
tasks = [
 tarefa1,
 tarefa2
]
```

        entrega

```bash
TaskList
```

Recebe:

```
tasks
```
e mostra na tela

4. Mas como entregar?

Aqui entram as props.

Vamos voltar ao JavaScript puro.

Imagina:

```JavaScript
function mostrarPessoa(nome){
    console.log(nome)
}
```

Essa função não sabe quem é Fernando.

Mas alguém pode enviar:

```JavaScript
mostrarPessoa("Fernando")
```

Agora ela conhece.

O valor veio de fora.

React faz a mesma coisa.

Temos:

```JavaScript
<TaskList />
```

Neste momento:

O TaskList recebe nada.

É como chamar:

```JavaScript
mostrarPessoa()
```

Sem argumento.

Quando fazemos:

```JavaScript
<TaskList tasks={tasks}/>
```

Estamos fazendo:

"TaskList, vou te entregar uma informação."

O lado esquerdo:

```JavaScript
tasks
```
é o nome que o filho vai receber.

O lado direito:

```JavaScript
{tasks}
```

é a variável que existe no App.

É quase como dizer:

```JavaScript
TaskList recebe uma caixa chamada tasks

dentro dela coloca o valor da variável tasks
```

5. Mas repara numa coisa importante

Quando fazemos:

```JavaScript
<TaskList tasks={tasks}/>
```

Hoje ele recebe:

```JavaScript
[]
```

Porque o estado está vazio.

Não aparece nada.

Mas depois:

Quando o estado mudar:

```JavaScript
[
 {
  title:"Estudar React"
 }
]
```

O React automaticamente envia o novo valor para o TaskList.

Por isso dizemos:

Estado muda → React atualiza interface.

6. E onde entra o useState?

Ela acontece aqui:

Imagina:

O utilizador adiciona:

```JavaScript
const novaTarefa = {
 title:"Estudar React"
}
```

Precisamos dizer ao React:

```
"Ei, a lista mudou."
```

Então usamos:

```JavaScript
setTasks([...tasks, novaTarefa])
```

Antes:

```JavaScript
tasks = []
```

Depois:

```JavaScript
tasks = [
 {
  title:"Estudar React"
 }
]
```

O React percebe:

"Ah, o estado mudou."

Então ele renderiza novamente.

Agora:

```JavaScript
<TaskList tasks={tasks}/>
```

recebe:

```JavaScript
[
 {
  title:"Estudar React"
 }
]
```

E finalmente consegue criar:

```JavaScript
<TaskCard />
```

Então o fluxo completo será:

```bash
Utilizador
    |
    |
Preenche formulário
    |
    |
TaskForm
    |
    |
avisa App
    |
    |
setTasks()
    |
    |
tasks muda
    |
    |
React atualiza
    |
    |
TaskList recebe tasks
    |
    |
map()
    |
    |
TaskCard aparece
```
### Outros Exemplos

Quando escrevemos:

```JavaScript
<TaskCard title="Estudar React" />
```
É como se estivéssemos a dizer ao React:

"Cria um componente TaskCard e entrega-lhe esta informação: o título é 'Estudar React'."

O TaskCard ainda não sabe nada. Ele apenas recebe o que o pai lhe envia.

É muito parecido com uma função JavaScript.

Em JavaScript fazes isto:

```JavaScript
function saudar(nome) {
  console.log(`Olá ${nome}`)
}

saudar("Fernando")
```

O que aconteceu?

A função recebeu um valor:

```JavaScript
nome = "Fernando"
```

No React acontece algo muito parecido.

O pai escreve:

```JavaScript
<TaskCard title="Estudar React" />
```

E o componente recebe essa informação:

```JavaScript
function TaskCard(props) {
  console.log(props)
}
```

Nesse momento, props seria algo semelhante a:

```JavaScript
{
  title: "Estudar React"
}
```

Reparaste numa coisa?

No JavaScript a função recebe parâmetros.

**No React o componente também recebe um parâmetro. Esse parâmetro chama-se normalmente props.**

É por isso que eu costumo dizer:

**Um componente React é, no fundo, uma função que recebe props e devolve JSX.**

O TaskList recebe a lista Assim:

O App vai entregar a lista ao TaskList.

Algo assim:

```JavaScript
<TaskList tasks={tasks} />
```

Mas eu não quero que copies isso ainda.

Quero que entendas.

Lê esta linha em português:

```JavaScript
<TaskList tasks={tasks} />
```

Como eu leria?

**"Estou a criar um componente TaskList e estou a entregar-lhe uma prop chamada tasks, cujo valor é a variável tasks do App."**

Repara que existem dois tasks, mas eles têm papéis diferentes.

O da esquerda:

```JavaScript
tasks=
```
é o nome da prop.

O da direita:

```JavaScript
{tasks}
```

é a variável que existe no App.

É como escrever:

```JavaScript
const nome = "Fernando"
```

À esquerda tens o nome da variável.

À direita tens o valor que lhe estás a atribuir.

Aqui é parecido.

------

Olha isto.

```JavaScript
<TaskList tasks={tasks} />
```

Vamos imaginar que

```JavaScript
const tasks = [
    { id: 1, title: "Estudar" },
    { id: 2, title: "Treinar" }
]
```

Pergunta:

Esse tasks (o da direita) é um objeto?

Resposta:

Não.

É um array.

```JavaScript
[
    { id:1, title:"Estudar" },
    { id:2, title:"Treinar" }
]
```

Dentro dele existem objetos.

Visualmente

```JavaScript
tasks

↓

Array

↓

Objeto

↓

Objeto
```

Então aqui

```JavaScript
<TaskList tasks={tasks} />
```

O primeiro

```JavaScript
tasks=
```

é o nome da prop.

O segundo

```JavaScript
{tasks}
```

é a variável.

São coisas diferentes.

O React transforma isso em algo parecido com:

```JavaScript
TaskList({
    tasks: tasks
})
```

Percebe?

O React criou um objeto.

```JavaScript
{
    tasks: tasks
}
```

Agora sim existe um objeto.

Quando escrevemos

```JavaScript
function TaskList(props){

}
```

O React faz

```JavaScript
props

↓

{
    tasks: [...]
}
```

Logo

```JavaScript
props.tasks
```

é o array. Porque dentro da propriedade tasks tem um array e esse array que recebeu da variável de estado tasks e guarda objetos

------

## Agora usamos desestruturação

Em vez de

```
function TaskList(props){

    console.log(props.tasks)

}
```

fazemos

```JavaScript
function TaskList({ tasks }){

    console.log(tasks)

}
```
É como se o JavaScript fizesse isto internamente:

```JavaScript
function TaskList(
  const props = { 
    
    tasks: 
  
  }
   ){

    console.log(tasks)
}
```

O objeto continua existindo.

Só que ele nunca recebeu o nome **props**.

O JavaScript pegou diretamente a propriedade.

Visualiza.

Sem desestruturação

```JavaScript
Objeto

↓

props

↓

tasks
```

Com desestruturação

```JavaScript

Objeto

↓

tasks
```
------

#### Então estes nomes aqui

```JavaScript
function TaskList({ tasks })
```

são o quê?

Nem objeto.

Nem props.

São variáveis.

O objeto já foi desestruturado.

O JavaScript criou

```JavaScript
const tasks = props.tasks
```

automaticamente.

Então aqui

```JavaScript
function TaskList({ tasks })

o tasks já é uma variável.
```
#### Exemplo visual desta linha:

```JavaScript
<TaskList tasks={tasks} />
```

Primeiro:

```JavaScript
TaskList({
    tasks: tasks
})
```
Significa:

```JavaScript
TaskList({
    tasks: [
        { title: "Estudar" },
        { title: "Treinar" },
        { title: "Dormir" }
    ]
})
```

Que é:

```bash
TaskList(
    {
        tasks:
        [
            { title: "Estudar" },
            { title: "Treinar" },
            { title: "Dormir" }
        ]
    }
)
```

Olha a estrutura.

```bash
Objeto
│
└── tasks
      │
      ▼
    Array
      │
      ├── Objeto
      ├── Objeto
      └── Objeto
```

Percebes quantos níveis existem?

props → objeto

tasks → propriedade desse objeto

tasks guarda um array

esse array guarda objetos

----

## Agora vamos juntar tudo

Suponhamos que tens isto:

```JavaScript
const tasks = [
    {
        id: 1,
        title: "Estudar React",
        completed: false
    },
    {
        id: 2,
        title: "Treinar",
        completed: true
    }
]
```

Depois escreves:

```JavaScript
<TaskList tasks={tasks} />
```

O React faz algo semelhante a:

```JavaScript
TaskList({
    tasks: [
        {
            id: 1,
            title: "Estudar React",
            completed: false
        },
        {
            id: 2,
            title: "Treinar",
            completed: true
        }
    ]
})
```
Então, dentro da função:

```JavaScript
function TaskList(props) {
```
props vale:

```JavaScript
{
    tasks: [
        {
            id: 1,
            title: "Estudar React",
            completed: false
        },
        {
            id: 2,
            title: "Treinar",
            completed: true
        }
    ]
}
```

Logo:

```JavaScript
props.tasks
```

é:

```JavaScript
[
    {
        id: 1,
        title: "Estudar React",
        completed: false
    },
    {
        id: 2,
        title: "Treinar",
        completed: true
    }
]
```
-------

## Agora entra a desestruturação

Se escreveres:

```JavaScript
function TaskList({ tasks }) {
```
o JavaScript faz automaticamente:

```JavaScript
const tasks = props.tasks
```

Então a variável tasks passa a valer:

```JavaScript
[
    {
        id: 1,
        title: "Estudar React",
        completed: false
    },
    {
        id: 2,
        title: "Treinar",
        completed: true
    }
]
```

Repara numa coisa muito importante:

```JavaScript
function TaskList({ tasks })
```
Não cria o array.

Não cria o objeto.

Ela apenas diz:

**"Do objeto que recebi, pega a propriedade chamada tasks e coloca o valor dela na variável tasks."**