import { useState } from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  /*O useState guarda as tarefas temporariamente na memória da aplicação. Assim que a página for carregada, o estado da aplicação volta no zero.*/

  const [tasks, setTasks] = useState([])

  /*O React cria uma variavel de estado (lista atual das tarefas) E uma função que altera essa lista (quando lista for modificada)*/
  /* Quando o form for preenchido, os dados serão enviados no tasks (estado)*/

  function addTask(newTask) {
    setTasks([...tasks, newTask]) /*Esta linha significa: "Pega nas tarefas que já tenho e cria uma nova lista acrescentando esta nova tarefa."*/

  }
  /* Por que crei esta função? Porque o App é quem possui o estado tasks. 
   Então faz sentido que o App seja responsável por decidir:

"Quando alguém me entregar uma nova tarefa, como ela entra na minha lista?"

A função recebe: newTask

porque essa será a tarefa que acabou de ser criada pelo formulário.*/
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
    /*Essa funçao será responsável por favoritar e desfavoritar uma task. Ela será passada para TaskCard. Porque quando o user favorita  ou desfavorita, é mudar o estado de uma task então quem controla o estado é o task quem modifica é o setTask ou seja o App.*/
  }

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
  }

  function deleteTask(taskId) {
    /*filter() percorre um array e cria um novo array contendo apenas os elementos que passam numa condição.Nesse caso quando o filter percorrer o array, o elemento que tiver id Igual ao id que a função recebeu, não entra na nova lista. por exemplo taskId = 2, 2 task.id = 2, ele faz: 2 !== 2 = false. Então essa tarefa fica de fora não entra no novo array.*/
    const updatedTasks = tasks.filter(task => {

      return taskId !== task.id

    })

    setTasks(updatedTasks)
  }
  return (
    <>
      <div className="container">
        <Header />
        <main>

          <TaskForm onAddTask={addTask} />

          {/*Aqui estou a passar uma função como prop. Porque o TaskForm precisa de uma maneira de dizer ao App: "Terminei de criar uma tarefa. Aqui está ela."*/}

          <TaskList
            tasks={tasks}
            onToggleFavorite={toggleFavorite}
            onToggleChecked={toggleChecked}
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

