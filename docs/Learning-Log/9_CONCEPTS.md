# Método find

O find() percorre o array procurando um elemento que satisfaça uma condição.

E existe uma diferença importante:

find() retorna um elemento, não um array.

Por exemplo:

```JS
const task = tasks.find(task => task.id === editingTaskId)
```

"Percorre tasks e encontra a tarefa cujo id seja igual ao editingTaskId."

Se encontrar:

```JS
task
```

será o objeto completo da tarefa.

Se não encontrar, retorna:

```JS
undefined
```

# Dúvidas sobre o estado de edição da tarefa

A chave é entender a diferença entre a variável e a função que altera a variável.

Temos:

```JS
const [editingTaskId, setEditingTaskId] = useState(null)
```

O React cria duas coisas:

```bash
editingTaskId       → valor atual
setEditingTaskId    → função que altera esse valor
```

Inicialmente:

```JS
editingTaskId = null
Então de onde vem taskId?
```

No TaskCard, temos:

```JS
onClick={() => onEditTask(task.id)}
```

Suponhamos que a tarefa seja:

```JS
{
    id: 1786980362392,
    title: "Estudar React",
    ...
}
```

Quando clicas em Editar, acontece:

```JS
onEditTask(task.id)
```
Ou seja:

```
onEditTask(1786980362392)
```

Essa função foi passada pelo App:

```JS
<TaskList
    onEditTask={editTask}
/>
```

E o TaskList passa para o TaskCard:

```JS
<TaskCard
    onEditTask={onEditTask}
/>
```

Portanto, no final:

```bash
task.id
   ↓
onEditTask(task.id)
   ↓
editTask(taskId)
   ↓
setEditingTaskId(taskId)

E aí:

setEditingTaskId(1786980362392)
```

faz o React atualizar:

```JS
editingTaskId
      ↓
1786980362392
```

## E por que não fazemos editingTaskId(taskId)?

Porque editingTaskId não é uma função.

Ele é apenas o valor:

editingTaskId

Enquanto:

setEditingTaskId

é a função.

Pensa assim:

```JS
editingTaskId       → "qual tarefa está sendo editada?"
setEditingTaskId    → "altera qual tarefa está sendo editada"
```

Por isso usamos:

```JS
setEditingTaskId(taskId)
```

e não:
```JS
editingTaskId(taskId) // ❌
```

E tem uma coisa muito importante aqui

Quando fazemos:

```JS
setEditingTaskId(taskId)
```

não estamos simplesmente "guardando um valor numa variável".

Estamos dizendo ao React:

"O estado editingTaskId mudou. Atualiza a interface porque agora existe uma nova tarefa em edição."

É exatamente o mesmo padrão que já usaste várias vezes:

```JS
setTasks(updatedTasks)
setEditingTaskId(taskId)
```

O padrão é:

estado atual
    ↓
função set...
    ↓
novo estado
    ↓
React renderiza novamente

Então sim: agora já tens a peça que faltava para entender de onde o ID chega ao editingTaskId.

```JS
if (editingTask !== null) {
    ...task
    editingTask.title
    editingTask.description
}else{
const newTask = {
    id: Date.now(),
    title: title,
    description: description,
    favorite: false,
    completed: false
}

}

```