import styles from './TaskCard.module.css'
function TaskCard({ task, onToggleFavorite, onToggleChecked, onDeleteTask }) {

    /*task torna-se uma propriedade de um objeto desestruturado que guarda um objeto que representa uma tarefa. Nesse objeto contém os dados de uma tarefa individual.*/
    /*Quando fizermos task.title ou task.description queremos acessar propriedades que existem dentro do objeto task. Por isso podemos imprimir os dados de uma tarefa*/

    return (
        <>
            <li className={styles.task_card}>

                <div className={styles.task_header}>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onToggleChecked(task.id)} />

                    {/*checked={task.completed: O estado marcado/desmarcado desta checkbox deve ser determinado pelo valor de task.completed."*/}

                    <h3 className={task.completed? styles.done_task : ''}>{task.title}</h3>
                    <button
                        type="button"
                        aria-label="Favoritar tarefa"
                        onClick={() => onToggleFavorite(task.id)}
                        className={task.favorite ? styles.favorite : ''}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill={task.favorite ? "currentColor" : "none"} /*Permitir que a cor do svg seja a mesma com a do button quando mudar para true assim há preenchimento interior do ícone*/
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M12 3.5l2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3.5z" />
                        </svg>
                    </button>
                </div>

                <p className={task.completed? styles.done_description : ''}>{task.description}</p>

                <div className={styles.task_actions}>
                    <button type="button" className={styles.edit_btn} >Desabled</button>
                    <button 
                    type="button" 
                    className={styles.delete_btn}
                    onClick={() => onDeleteTask(task.id)}>Eliminar</button>
                </div>
            </li>

            {/*task_header: cabeçalho da tarefa - Título + favorite.*/}
        </>
    )
}
export default TaskCard