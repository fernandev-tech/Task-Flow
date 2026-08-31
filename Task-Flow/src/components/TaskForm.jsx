import { useEffect, useState } from 'react'
import styles from './TaskForm.module.css'
import { PlusIcon, CheckIcon, CancelIcon } from './TaskIcons'

function TaskForm({ onAddTask, editingTask, saveEditingTask, cancelEditingTask }) {

    /*editingTask é o objeto inteiro da tarefa que está sendo editada*/
    /*Aqui estamos recebendo uma prop onAddTask que foi passada pelo App ao form. E essa prop carrega a função addTask. Então essa prop aponta para a referÊncia dessa função.*/
    /*Estado do título*/
    const [editingTitle, setEditingTitle] = useState("")
    useEffect(() => {
        setEditingTitle(editingTask ? editingTask.title : "")
    }, [editingTask])

    /*Estado da Descrição*/
    const [editingDescription, setEditingDescription] = useState("")
    useEffect(() => {
        setEditingDescription(editingTask ? editingTask.description : "")
    }, [editingTask] /* Quando editingTask mudar execute o useEffect e dentro dele passamos o texto da descrição original para o estado. Pois o editingTask começa como null/undefined. Quando clicamos em editar, o valor muda e editinTitle recebe o title da tarefa selecionada.*/

    )
    /*editingTitle começa como "" porque ele representa o texto do campo, e inicialmente não há texto digitado. Quando o usuário digitar, setEditingTitle atualizará esse texto. Mais tarde, quando ele salvar, o App usará esse valor para atualizar tasks através de setTasks.*/

    /*Estado da Mensagem de Erro*/
    const [errorMessage, setErrorMessage] = useState("")

    function handleSubmit(event) {
        event.preventDefault()

        /*Em vez da página carregar após o form for enviado, essa função vai impedir com que o navegador acrregue a página e permitir com que o React reaja*/

        const formData = new FormData(event.target) /*"Cria uma nova instância de FormData usando este formulário como fonte dos dados."*/

        const title = formData.get('title') /*"O objeto formData acessa o método get que pega o name que no form tem o valor title e guarda na variável title."*/


        if (title === "") {
            setErrorMessage("Escreva um título para adicionar nova tarefa.")
            return
        }
        else {
            setErrorMessage("")
        }

        const description = formData.get('description')
        if (editingTask) {
            saveEditingTask(editingTask.id, editingTitle, editingDescription)
            event.target.reset() /*Reset do formulário*/

        } else {
            const newTask = {
                id: Date.now(),
                title: title,
                description: description,
                favorite: false,
                completed: false
            }
            onAddTask(newTask) /*Como o onAddTask reerencia a função addTask, chammos essa função e passamos o objeto newTask como parâmetro. Ou seja estamos passando o newTask para App.*/
            setEditingTitle("")
            setEditingDescription("")


        }
    }
    return (

        <>
            <form onSubmit={handleSubmit} className={styles.form_card}>
                {/*O onSubmit recebe uma função que será executada quando o formulário for submetido.*/}
                <label htmlFor="title">Título</label>
                <input value={editingTitle}
                    name="title"
                    id="title"
                    type="text"
                    placeholder="Digite o título da tarefa"
                    onChange={
                        function handleEditingTitle(event) {
                            setEditingTitle(event.target.value)


                        }

                        /*O valor do input mudou - onChange executa a função - event representa essa mudança -
                       event.target = o input - event.target.value = texto que está no input -
                        setEditingTitle(...) - editingTitle recebe esse texto*/
                    } />


                {/*“Se existe uma tarefa sendo editada, o value deste input será o título dela. Caso contrário, será uma string vazia.”*/}

                <label htmlFor="description">Descrição</label>
                <textarea value={editingDescription}
                    name="description"
                    id="description"
                    placeholder="Digite a descrição da tarefa"
                    onChange={(event) => {
                        setEditingDescription(event.target.value)
                    }}></textarea>

                {/*value={editingTask ? editingTask.title : ""}significa:
             “O valor deste input deve ser exatamente editingTask.title.”
            Essa condição value={editingTask ? editingTask.description : ""} permite que quando clicar em editar, o título apareça no input do form. Só isso*/}
                <div className={styles.buttonContainer}>
                    {editingTask &&
                        <button type="button" className={styles.cancel_btn}
                            onClick={() => cancelEditingTask()}>
                            <CancelIcon />Cancelar</button>
                    }
                    <button type="submit">
                        {editingTask ? <CheckIcon /> : <PlusIcon />}
                        {editingTask ? "Salvar" : "Adicionar"}

                    </button>

                </div>

            </form>
            {errorMessage &&
                <p className={styles.errorMessage}>{errorMessage}</p>


            }



        </>
    )

    /* SOBRE OS TERNÁRIOS NO BOTAÕ

    Detalhe de sintaxe convencional: quando o valor de um lado do ternário é um elemento JSX com múltiplas linhas (como o <svg>, que tem uma tag de abertura, conteúdo e fechamento), é convenção envolver cada ramo em parênteses ( ). Isso é só legibilidade — o JavaScript não exige, mas todo o código React que vais ver por aí segue esse estilo quando o JSX ocupa mais de uma linha.*/
    /* O htmlFor procura o id. Isso cria a ligação de acessibilidade.

  - name="title" identifica o valor que aquele campo representa: o título da tarefa.

  Em HTML puro, ao submeter um formulário, o navegador monta os dados usando os names. Se preenchesses:
  
   Atributo    Pergunta que responde
  ━━━━━━━━━━  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   id          “Qual é a identidade deste elemento na página?”
  ──────────  ──────────────────────────────────────────────────────────────────
   name        “Que dado este campo contém quando o formulário é lido/enviado?”

  Portanto, id conecta o campo à interface e acessibilidade; name dá nome ao valor que será usado como dado.
  */

    /*No React, onChange é um evento que acontece quando o valor de um campo de formulário muda.*/
}
export default TaskForm