# Estados da Aplicação

```JS
App
│
├── tasks
│   └── dados oficiais das tarefas
│
└── editingTaskId
    └── qual tarefa está sendo editada


TaskForm
│
├── title
│   └── o que o usuário está digitando
│
└── description
    └── o que o usuário está digitando
```


Já title e description são os valores que estão sendo construídos pelo usuário antes de salvar.

Por isso conseguimos fazer:

```bash
Tarefa original
"Estudar React"
       ↓
Form recebe
"Estudar React"
       ↓
Usuário modifica
"Estudar React e JavaScript"
       ↓
title guarda o novo valor
       ↓
Clica em salvar
       ↓
App atualiza tasks
```

E aí vem a parte bonita: o setTasks continua pertencendo ao App.

O formulário não deve pegar tasks diretamente e modificar.

Ele vai dizer ao App:

“Terminei de editar esta tarefa. Aqui estão os novos dados.”

Isso será outra função passada por props, exatamente como fizemos com:

Agora termos algo como:

```JS
TaskForm
   ↓
"Terminei de editar"
   ↓
App
   ↓
setTasks(...)
   ↓
tasks atualizado
   ↓
React renderiza novamente
   ↓
TaskCard mostra os novos dados
```
# Fluxo para Editar uma tarefa

```JS
CLIQUE EM EDITAR
       ↓
TaskCard
       ↓
onEditTask(task.id)
       ↓
App → editTask(taskId)
       ↓
setEditingTaskId(taskId)
       ↓
editingTaskId muda
       ↓
tasks.find(...)
       ↓
editingTask encontrado
       ↓
TaskForm recebe editingTask
       ↓
form mostra title + description
       ↓
usuário altera os campos
       ↓
estado do formulário muda
       ↓
usuário clica "Salvar"
       ↓
TaskForm envia os novos dados para App
       ↓
saveEditingTask(...)
       ↓
tasks.map(...)
       ↓
tarefa correspondente é substituída
       ↓
setTasks(updatedTasks)
       ↓
React atualiza a interface
       ↓
useEffect salva no localStorage
```

# Entendendo editinTask e useEffect no Projeto

O useEffect não observa mudanças dentro de uma variável. Ele observa se o valor de uma dependência mudou entre renderizações.

No projeto:

```JSX
useEffect(() => {
    setEditingTitle(editingTask ? editingTask.title : "")
}, [editingTask])
```

O React está basicamente dizendo:

"Depois de uma renderização, compara o editingTask desta renderização com o editingTask da renderização anterior. Se mudou, executa este efeito."

Isso é muito diferente de:

"Fica olhando para editingTask o tempo inteiro."

Ele não fica monitorando continuamente.

# 2. Vamos voltar ao início

No App temos:

```JSX
const [editingTaskId, setEditingTaskId] = useState(null)
```

Inicialmente:

```bash
editingTaskId
      ↓
     null
```

E depois:

```JSX
const editingTask = tasks.find(task => task.id === editingTaskId)
```

Como editingTaskId é null, não existe tarefa com id === null.

Então:

```JSX
editingTask
      ↓
undefined
```

Portanto, inicialmente:

```JSX
editingTaskId = null
editingTask = undefined
```

## 3. Agora clicamos em Editar

Imagina que clicamos na tarefa:

```JS
id: 15
title: "Estudar React"
```

O TaskCard chama:

```JSX
onEditTask(task.id)
```

O App recebe:

```JSX
editTask(15)
```

E executa:

```JSX
setEditingTaskId(15)
```

Aqui acontece uma coisa MUITO importante:

```setEditingTaskId(15)``` não modifica imediatamente a variável editingTaskId naquela execução da função.

Ele está dizendo ao React:

"Quero que o estado passe a ser 15. React, faça uma nova renderização."

Então o React renderiza novamente o App.

Agora:

```bash
editingTaskId
      ↓
      15
```

E por causa disso esta linha:

```JSX
const editingTask = tasks.find(task => task.id === editingTaskId)
```

é executada novamente.

Agora:

```JSX
editingTaskId = 15
       ↓
tasks.find(...)
       ↓
editingTask = {
    id: 15,
    title: "Estudar React",
    description: "..."
}
```
🎯 Aqui editingTask mudou.

Antes:

```bash
undefined
```

Agora:

```bash
objeto da tarefa
```

# 4. E só DEPOIS entra o useEffect

O TaskForm recebeu:

```bash
editingTask={editingTask}
```

Então o TaskForm também renderiza novamente.

Na renderização anterior:

```JSX
editingTask
   ↓
undefined
```

Na nova renderização:

```JSX
editingTask
   ↓
{
  id: 15,
  title: "Estudar React",
  ...
}
```

O React olha para:

```JSX
[editingTask]
```

e percebe:

       antes                  agora

       undefined       →      objeto


Mudou.

Então:

```JSX
useEffect(() => {
    setEditingTitle(editingTask ? editingTask.title : "")
}, [editingTask])
```

é executado.

E então:

```JSX
editingTask.title
      ↓
"Estudar React"
      ↓
setEditingTitle(...)
      ↓
editingTitle = "Estudar React"
```

5. Agora vem uma parte MUITO importante

Tu podes estar pensando:

"Então o useEffect mudou o editingTask?"

Não.

É exatamente o contrário.

```bash
editingTask mudou
       ↓
useEffect percebeu
       ↓
useEffect executou
       ↓
editingTitle mudou
```

O useEffect reage à mudança.

Ele não provoca a mudança de editingTask.

# 6. Agora o usuário começa a digitar

Imagina que ele transforma:

Estudar React

em:

Estudar React hoje

O ```onChange``` executa:

```JSX
setEditingTitle(event.target.value)
```

Agora:

```bash
editingTitle
     ↓
"Estudar React hoje"
```

Mas olha para o editingTask:

```JSX
editingTask
     ↓
{
    id: 15,
    title: "Estudar React",
    description: "..."
}
```

Continua igual.

Isso é fundamental.

O usuário alterou:

```JSX
editingTitle
```

e não:

```JSX
editingTask
```

Portanto:

       editingTask ❌ não mudou

       editingTitle ✅ mudou

E por isso:

```JSX
useEffect(..., [editingTask])
```

não executa novamente.

# 7. Então por que parece que o useEffect está relacionado à digitação?

Porque existem duas coisas acontecendo no mesmo componente:

Quando começa a edição:

```JSX
editingTask muda
      ↓
useEffect executa
      ↓
estado do formulário recebe valores originais
```

Quando digitamos:
```JSX
usuário digita
      ↓
onChange
      ↓
setEditingTitle
      ↓
editingTitle muda
```

São dois fluxos diferentes.

Guarda isto:

                editingTask
                    │
                    │ muda
                    ↓
                useEffect
                    │
                    ↓
              editingTitle

Mas depois:

              usuário digita
              ↓
              onChange
              ↓
              setEditingTitle()
              ↓
              editingTitle

Não há:


       editingTitle → editingTask

Portanto o objeto original não é alterado.

# 8. E quando clicamos em Salvar?

Aí finalmente fazemos:

```JSX
editingTitle
editingDescription
       +
editingTask.id
       ↓
saveEditingTask(...)
       ↓
App
       ↓
setTasks(updatedTasks)
```

Agora sim o tasks muda.

E como tasks mudou, o App renderiza novamente.

O editingTask é calculado novamente:

```JSX
tasks.find(...)
```

E depois fazemos:

```JSX
setEditingTaskId(null)
```

Então:

```JSX
editingTaskId
15 → null
```

Consequentemente:

```JSX
editingTask
objeto → undefined
```

E aí o useEffect recebe:

```JSX
editingTask
objeto → undefined
```

Mudou.

Então executa:

```JSX
setEditingTitle("")
setEditingDescription("")
```

E o formulário limpa.

# 9. O mapa completo 🧠

Se conseguires visualizar isto, a confusão começa a desaparecer:

                 APP
                  │
                  ↓
          editingTaskId
             │          │
          null          ID
             │          │
             └────┬─────┘
                  ↓
             editingTask
                  │
                  ↓
              TaskForm
                  │
          ┌───────┴────────┐
          ↓                ↓
     useEffect          onChange
          │                │
          ↓                ↓
 editingTitle        editingTitle
 editingDescription  editingDescription

 ```JSX
useEffect
```

Serve para sincronizar o estado do formulário quando a tarefa selecionada muda.

onChange

Serve para atualizar o estado quando o usuário modifica o formulário.

São responsabilidades diferentes.

## 10. A pergunta mental que quero que passes a fazer

Sempre que vires:

```JSX
useEffect(..., [algumaCoisa])
```

pergunta:

"Qual valor estou dizendo ao React para comparar entre uma renderização e outra?"

No teu caso:

```JSX
[editingTask]

Resposta:

```JSX
O objeto editingTask.
```

Depois pergunta:

"Quem pode fazer esse valor mudar?"

No teu projeto:

```JSX
editingTask
     ↑
tasks + editingTaskId
```

E finalmente:

"Quando ele mudar, qual efeito quero executar?"

Resposta:

```bash
pegar título da tarefa
        ↓
editingTitle

pegar descrição da tarefa
        ↓
editingDescription
```
