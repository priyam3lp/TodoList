import Card from '../UI/Card';

const InProgress = (props) =>{

    const clickHandler = (e) => {
        props.moveInProgressTodo(e.target.id);
        props.pushToCompleted(e.target.value)
     }
    return (
       <Card>
        <h3>In Progress</h3>
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

export default InProgress;