
import Card from '../UI/Card';

const Todos = (props) => {

    const clickHandler = (e) => {
        props.moveTodo(e.target.id);
        props.pushToProgress(e.target.value)
     }
    return (
        <Card >
            <h3>Todos</h3>
            <ul>
                {props.listItems.map((item, index) => {
                    return (
                        <div key={index} id={index}>
                            <li id={index}>{item}</li>
                            <button value={item} onClick={clickHandler} id={index}>⬇</button>
                        </div>
                    )
                })}
            </ul>
        </Card>
    )
}

export default Todos;