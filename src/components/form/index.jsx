import "./index.css"

const Formulario = ({handleAddItemToList, handleChangeInput, task}) => {
    return (
        <form onSubmit={handleAddItemToList}>
        <input
          type="text"
          placeholder="Adicione uma tarefa"
          onChange={handleChangeInput}
          value={task}
        />

        <button type="submit">Adicionar</button>
      </form>
    )
}
export default Formulario