import { useState } from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'

function App() {

  const [tasks, setTasks] = useState([])
  /*O React cria uma variavel de estado (lista atual das tarefas) E uma função que altera essa lista*/

  return (
    <>
      <Header />
      <main>

        <TaskForm setTasks={setTasks} />

         {/*Aqui estou a passar a função setTasks (que altera o estado) como valor dentro da prop que está sendo passada para o componente TaskForm*/}
       
        <TaskList tasks={tasks} />

        {/*A variável de estado (que tem a lista atual das tarefas) é enviado como valor de uma prop que está sendo enviada para o componente TaskList*/}
      </main>
    </>
  )

}

export default App

