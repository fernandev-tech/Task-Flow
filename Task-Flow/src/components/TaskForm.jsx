function TaskForm({ setTasks }) {
    /*Aqui o objeto que foi enviado para essa propriedade é desestruturado. Então TaskForm tem a função setTasks dentro da prop setTasks.*/
    function handleSubmit(event) {
        event.preventDefault()
        /*Em vez da página carregar após o form for enviado, essafunção vai impedir com que o navegador acrregue a página e permitir com que o React reaja*/

        const formData = new FormData(event.target) /*"Cria uma nova instância de FormData usando este formulário como fonte dos dados."*/
        const title = formData.get('title') /*"O objeto formData acessa o método get que pega o name que no form tem o valor title e guarda na variável title."*/
        const description = formData.get('description')

    }




    return (


        <form onSubmit={handleSubmit}>
            {/*O onSubmit recebe uma função que será executada quando o formulário for submetido.*/}
            <label htmlFor="title">Título</label>
            <input name="title" id="title" type="text" placeholder="Digite o título da tarefa" />

            <label htmlFor="description">Descrição</label>
            <textarea name="description" id="description" placeholder="Digite a descrição da tarefa"></textarea>

            <button type="submit">Adicionar</button>
        </form>
    )
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
}
export default TaskForm