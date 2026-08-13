import styles from './TaskList.module.css'
import TaskCard from "./TaskCard"
function TaskList({ tasks, onToggleFavorite, onToggleChecked, onDeleteTask }) {

    /*TaskList recebe a variável de estado através da prop que lhe foi passada. Nesse caso Este componente recebe a lista das tarefas*/
    /*Agora RaskList também recebe a função do App responsável por alterar o favorite*/

    return (
        <>
            {
                tasks.length === 0
                    ? <p>Ainda sem tarefas</p>
                    : <ul className={styles.task_list}>
                        {
                            tasks.map(task => (
                                <TaskCard
                                    key={task.id}
                                    task={task}
                                    onToggleFavorite={onToggleFavorite}
                                    onToggleChecked={onToggleChecked}
                                    onDeleteTask={onDeleteTask}
                                />
                            ))
                        }
                    </ul>
            }
        </>

    )
}
export default TaskList