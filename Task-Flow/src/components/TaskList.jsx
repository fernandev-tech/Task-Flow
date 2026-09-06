import styles from './TaskList.module.css'
import feedbackStyles from './Feedback.module.css'
import TaskCard from "./TaskCard"
function TaskList({
    tasksToShow,
    tasks,
    activeList,
    setActiveList,
    totalTasks,
    totalFavoritesTasks,
    feedback,
    onToggleFavorite,
    onToggleChecked,
    onEditTask,
    onDeleteTask
}) {

    /*TaskList recebe a variável de estado através da prop que lhe foi passada. Nesse caso Este componente recebe a lista das tarefas*/
    /*Agora RaskList também recebe a função do App responsável por alterar o favorite*/

    return (
        <>
            {
                tasksToShow.length === 0
                    ? <p className={styles.no_tasks}>Ainda sem tarefas</p>
                    : <ul className={styles.task_list}>
                        {feedback && feedback.target === "taskList" && (
                            <p className={`${feedbackStyles.feedback} ${feedbackStyles[feedback.type]}`}>
                                {feedback.message}
                            </p>
                        )}
                        <div className={styles.ListNavegation}>


                            <button
                                className={`${styles.list_button} ${activeList === "all" ? styles.list_button_active : ""
                                    }`}
                                type="button"
                                onClick={() => {

                                    setActiveList("all")
                                }}>Todas ({totalTasks})</button>

                            <button className={`${styles.list_button} ${activeList === "all" ? styles.list_button_active : ""
                                }`}
                                type="button"
                                onClick={() => {
                                    setActiveList("favorites")


                                }}>Favoritas ({totalFavoritesTasks})</button>
                        </div>

                        {
                            tasksToShow.map(task => (
                                <TaskCard
                                    key={task.id}
                                    task={task}
                                    feedback={feedback}
                                    onToggleFavorite={onToggleFavorite}
                                    onToggleChecked={onToggleChecked}
                                    onEditTask={onEditTask}
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