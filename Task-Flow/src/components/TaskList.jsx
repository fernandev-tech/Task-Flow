import styles from './TaskList.module.css'
import feedbackStyles from './Feedback.module.css'
import TaskCard from "./TaskCard"
function TaskList({
    tasksToShow,
    tasks,
    activeList,
    animationDirection,
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
                        <div className={styles.list_navigation}>

                            <button
                                type="button"
                                className={`${styles.list_button} ${activeList === "all"
                                    ? styles.list_button_active
                                    : ""
                                    }`}
                                onClick={() => {
                                    setActiveList("all")
                                }}>Todas ({totalTasks})
                            </button>

                            <button
                                type="button"
                                className={`${styles.list_button} ${activeList === "favorites"
                                    ? styles.list_button_active
                                    : ""
                                    }`}
                                onClick={() => {
                                    setActiveList("favorites")
                                }}>Favoritas ({totalFavoritesTasks})
                            </button>
                        </div>
                        <div className={`${styles.list_view} ${styles[animationDirection]}`}>

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
                        </div>
                    </ul>
            }
        </>

    )
}
export default TaskList