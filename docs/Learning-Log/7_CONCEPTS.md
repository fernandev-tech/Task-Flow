# Fluxo da Aplicação Funcionando

```bash
Tu preencheste o formulário
        ↓
handleSubmit(event)
        ↓
FormData leu os campos
        ↓
title + description
        ↓
newTask foi criado
        ↓
onAddTask(newTask)
        ↓
addTask(newTask) no App
        ↓
setTasks([...tasks, newTask])
        ↓
tasks mudou
        ↓
React percebeu a mudança
        ↓
TaskList recebeu tasksTu preencheste o formulário
        ↓
handleSubmit(event)
        ↓
FormData leu os campos
        ↓
title + description
        ↓
newTask foi criado
        ↓
onAddTask(newTask)
        ↓
addTask(newTask) no App
        ↓
setTasks([...tasks, newTask])
        ↓
tasks mudou
        ↓
React percebeu a mudança
        ↓
TaskList recebeu tasks
        ↓
tasks.map(...)
        ↓
TaskCard recebeu task
        ↓
🎉 apareceu na tela
        ↓
tasks.map(...)
        ↓
TaskCard recebeu task
        ↓
🎉 apareceu na tela
```