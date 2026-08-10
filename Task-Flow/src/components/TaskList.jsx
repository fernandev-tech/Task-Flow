function TaskList({ tasks }) {

    return (
        <>
            {
                tasks.length === 0
                    ? <p>Ainda sem tarefas</p>
                    : <ul>
                        Lista de tarefas
                    </ul>
            }
        </>

    )
}
export default TaskList