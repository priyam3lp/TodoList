import Card from '../UI/Card';

const Completed = (props) => {

    const clickHandler = (e) => {
        props.moveCompletedTodo(e.target.id)
     }
    return (
        <Card>
        <h3>Completed</h3>
        <ul>
            {props.listItems.map((item, index) => {
                return (
                    <div key={index} id={index}>
                        <li id={index}>{item}</li>
                        <button onClick={clickHandler} id={index}>⬇</button>
                    </div>
                )
            })}
        </ul>
        </Card>
    )
}

export default Completed;