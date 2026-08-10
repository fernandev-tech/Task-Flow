import TaskCard from "./TaskCard"
function TaskList({ tasks }) {

    /*TaskList recebe a variável de estado através da prop que lhe foi passada. Nesse caso Este componente recebe a lista das tarefas*/
    
    return (
        <>
            {
                tasks.length === 0
                    ? <p>Ainda sem tarefas</p>
                    : <ul>
                        {
                            tasks.map(task => (
                                <TaskCard
                                    key={task.id}
                                    task={task}
                                />
                            ))
                        }
                    </ul>
            }
        </>

    )
}
export default TaskList