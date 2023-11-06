import "./list.css"


const Lista = ({itemsList}) => {
    return (
        <ul className="todo-list">
        {itemsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )
}

export default Lista;