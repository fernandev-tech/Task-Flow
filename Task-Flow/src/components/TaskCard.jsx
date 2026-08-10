function TaskCard({ task }) {

    /*task torna-se uma propriedade de um objeto desestruturado que guarda um objeto que representa uma tarefa. Nesse objeto contém os dados de uma tarefa individual.*/
    /*Quando fizermos task.titleou task.description queremos acessar propriedades que existem dentro do objeto task. Por isso podemos imprimir os dados de uma tarefa*/

    return (
        <>
            <li>
                <p>Título: {task.title}</p>
                <p>Descrição: {task.description}</p>
            </li>

        </>
    )
}
export default TaskCard