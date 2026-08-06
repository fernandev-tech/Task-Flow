import { useState } from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'

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

export default App
