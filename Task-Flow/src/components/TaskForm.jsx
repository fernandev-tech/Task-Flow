function TaskForm() {
    return (

        <form>
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