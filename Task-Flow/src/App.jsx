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
  return (
    <>
      <div className="container">
        <Header />
        <main>

          <TaskForm onAddTask={addTask} />

          {/*Aqui estou a passar uma função como prop. Porque o TaskForm precisa de uma maneira de dizer ao App: "Terminei de criar uma tarefa. Aqui está ela."*/}

          <TaskList tasks={tasks} />

          {/*A variável de estado (que tem a lista atual das tarefas) é enviado como valor de uma prop que está sendo enviada para o componente TaskList*/}
        </main>
      </div>
    </>
  )

}

export default App

