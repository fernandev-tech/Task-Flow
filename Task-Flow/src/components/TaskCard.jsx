import styles from './TaskCard.module.css'
function TaskCard({ task }) {

    /*task torna-se uma propriedade de um objeto desestruturado que guarda um objeto que representa uma tarefa. Nesse objeto contém os dados de uma tarefa individual.*/
    /*Quando fizermos task.title ou task.description queremos acessar propriedades que existem dentro do objeto task. Por isso podemos imprimir os dados de uma tarefa*/

    return (
        <>
            <li className={styles.task_card}>

                <div className={styles.task_header}>
                    <h3>{task.title}</h3>
                    <button type="button" aria-label="Favoritar tarefa">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M12 3.5l2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3.5z" />
                        </svg>
                    </button>
                </div>

                <p>{task.description}</p>

                <div className={styles.task_actions}>
                    <button type="button" className={styles.done_btn}>Concluir</button>
                    <button type="button" className={styles.delete_btn}>Eliminar</button>
                </div>
            </li>

            {/*task_header: cabeçalho da tarefa - Título + favorite.*/}
        </>
    )
}
export default TaskCard