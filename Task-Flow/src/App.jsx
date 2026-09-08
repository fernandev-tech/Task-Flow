import { useRef, useEffect, useState } from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'
import styles from './components/Feedback.module.css'

function App() {
  /*O useState guarda as tarefas temporariamente na memória da aplicação. Assim que a página for carregada, o estado da aplicação volta no zero.*/

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks")
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks)
      return parsedTasks
    } else {
      return []
    }
  })

  /*O React cria uma variavel de estado (lista atual das tarefas) E uma função que altera essa lista (quando lista for modificada)*/
  /* Quando o form for preenchido, os dados serão enviados no tasks (estado)*/

  /*Gravar dados*/
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)) /*"Sempre que tasks mudar, transforma o array de tarefas em JSON e guarda-o no localStorage."*/
  }, [tasks])


  const [editingTaskId, setEditingTaskId] = useState(null) /*o null representa a ausência de valor. Quer dizer que o estado começa com um valor nulo*/

  /*Este estado representa a visão selecionada.*/
  const [activeList, setActiveList] = useState("all")

  const tasksToShow = activeList === "all" ? tasks : tasks.filter(task => task.favorite === true)

  const totalTasks = tasks.length

  const totalFavoritesTasks = tasks.filter(task => task.favorite === true).length

  /*Estado do feedback ao adicionar tarefa*/
  const [feedback, setFeedback] = useState(null)

  function showFeedback(type, message, target) {
    setFeedback({
      type: type,
      message: message,
      target: target

    })
    setTimeout(() => {
      setFeedback(null)
    }, 3000)
  }

  /*UseRef*/
  const previousList = useRef("all")

  useEffect(() => {
    previousList.current = activeList
  }, [activeList])

  const animationDirection =
    previousList.current === "all" && activeList === "favorites"
      ? "slide-left"
      : "slide-right"

  /*Adicionar nova tarefa*/
  function addTask(newTask) {
    setTasks([...tasks, newTask]) /*Esta linha significa: "Pega nas tarefas que já tenho e cria uma nova lista acrescentando esta nova tarefa."*/
    showFeedback("success", "Tarefa adicionada!", "form")

  }
  /* Por que crei esta função? Porque o App é quem possui o estado tasks. 
   Então faz sentido que o App seja responsável por decidir:

"Quando alguém me entregar uma nova tarefa, como ela entra na minha lista?"

A função recebe: newTask

porque essa será a tarefa que acabou de ser criada pelo formulário.*/

  /*Favoritar*/
  function toggleFavorite(taskId) {

    /*→ percorremos todas as tarefas para construir uma nova lista.*/
    const updatedTasks = tasks.map(task => {

      if (taskId === task.id) {
        /*→ verificamos se a tarefa atual é justamente a tarefa clicada.*/
        return (
          /*→ criamos uma nova versão daquela tarefa, preservando os outros dados e alterando favorite.*/
          {
            ...task,
            favorite: !task.favorite
          }
        )
      } else {
        return task
      }
    })
    setTasks(updatedTasks)

    const updatedTask = updatedTasks.find(task => taskId === task.id)
    /*Essa funçao será responsável por favoritar e desfavoritar uma task. Ela será passada para TaskCard. Porque quando o user favorita  ou desfavorita, é mudar o estado de uma task então quem controla o estado é o task quem modifica é o setTask ou seja o App.*/
    if (updatedTask.favorite) {
      setFeedback({
        type: "success",
        message: "Tarefa favoritada!",
        target: "taskCard",
        taskId: taskId
      })

    } else {
      setFeedback({
        type: "success",
        message: "Removido dos favoritos!!",
        target: "taskCard",
        taskId: taskId
      })
    }
    setTimeout(() => {
      setFeedback(null)
    }, 3000)
  }


  /*Concluir Tarefa*/
  function toggleChecked(taskId) {

    const updatedTasks = tasks.map(task => {

      if (taskId === task.id) {
        return (
          {
            ...task,
            completed: !task.completed
          }
        )
      } else {
        return task
      }
    })

    setTasks(updatedTasks)

    const updatedTask = updatedTasks.find(task => taskId === task.id)

    if (updatedTask.completed) {
      setFeedback({
        type: "success",
        message: "Tarefa concluída!",
        target: "taskCard",
        taskId
      })
    } else {
      setFeedback({
        type: "success",
        message: "Tarefa pendente!!",
        target: "taskCard",
        taskId
      })
    }
    setTimeout(() => {
      setFeedback(null)
    }, 3000)
  }

  /*Editar tarefa*/
  function editTask(taskId) {

    setEditingTaskId(taskId)

  }

  const editingTask = tasks.find(task => task.id === editingTaskId)



  function saveEditingTask(taskId, newTitle, newDescription) {

    const updatedTasks = tasks.map(task => {
      if (taskId === task.id) {
        return (
          {
            ...task,
            title: newTitle,
            description: newDescription

          }
        )

      } else {
        return task
      }

    })

    setTasks(updatedTasks)
    setEditingTaskId(null) /*Após salvar a tarefa, o estado de edição volta para null.*/
    showFeedback("sucess", "Tarefa salvada com sucesso!", "form")

  }
  /*Cancelar Tarefa*/
  function cancelEditingTask() {
    setEditingTaskId(null)
  }


  /*Apagar tarefa*/
  function deleteTask(taskId) {
    /*filter() percorre um array e cria um novo array contendo apenas os elementos que passam numa condição.Nesse caso quando o filter percorrer o array, o elemento que tiver id Igual ao id que a função recebeu, não entra na nova lista. por exemplo taskId = 2, 2 task.id = 2, ele faz: 2 !== 2 = false. Então essa tarefa fica de fora não entra no novo array.*/
    const updatedTasks = tasks.filter(task => {

      return taskId !== task.id

    })

    setTasks(updatedTasks)
    showFeedback("success", "Tarefa Eliminada!", "taskList")
  }



  return (
    <>
    
      <div className="container">
        <Header />
        <main>

          <TaskForm
            onAddTask={addTask}
            editingTask={editingTask}
            saveEditingTask={saveEditingTask}
            cancelEditingTask={cancelEditingTask} />
          {feedback && feedback.target === "form" && (
            <p className={`${styles.feedback} ${styles[feedback.type]}`}>
              {feedback.message}
            </p>
          )}
          {/*Existe feedback E ele não possui taskId? Então mostra no formulário.*/}

          {/*Aqui estou a passar uma função como prop. Porque o TaskForm precisa de uma maneira de dizer ao App: "Terminei de criar uma tarefa. Aqui está ela."*/}

          <TaskList
            tasksToShow={tasksToShow}
            tasks={tasks}
            activeList={activeList}
            animationDirection={animationDirection}
            setActiveList={setActiveList}
            totalTasks={totalTasks}
            totalFavoritesTasks={totalFavoritesTasks}
            feedback={feedback}
            onToggleFavorite={toggleFavorite}
            onToggleChecked={toggleChecked}
            onEditTask={editTask}
            onDeleteTask={deleteTask}
          />

          {/*A variável de estado (que tem a lista atual das tarefas) é enviado como valor de uma prop que está sendo enviada para o componente TaskList*/}

          {/*Passamos a função toggleFavorite como valor para a prop onToggleFavorite porque o TaskList é quem renderiza os TaskCard. Então o TaskList precisa receber a função para poder entregá-la ao TaskCard.*/}
        </main>
      </div>
    </>
  )

}

export default App

