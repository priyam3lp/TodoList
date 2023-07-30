import { useState } from 'react';
import classes from './Body.module.css';
import Modal from '../UI/Modal';
import Todos from './Todos';
import InProgress from './InProgress';
import Completed from './Completed';

const todos = ['Read Book', 'Clean Room', 'Exercise'];
const inProgress = ['Practice react', 'Learn DSA'];
const completed = ['Laundry', 'Walking', 'Shower'];

const Body = () => {
    const [modal, setModal] = useState(false);
    const [todoItems, setTodoItems] = useState(todos);
    const [inProgressItems, setInProgressItems] = useState(inProgress);
    const [completedItems, setCompletedItems] = useState(completed);

    const showModalHandler = () => {
        setModal(true);
    }

    const createTodo = (todo) => {
        setTodoItems((prev) => {
            return [...prev, todo]
        })
    };

    const moveTodoHandler = (id) => {
        setTodoItems((prev) => {
            return prev.filter((item, index) => {
                return id != index
            })
        })
    };

    const pushToProgress = (value) => {
        setInProgressItems((prev) => {
            return [...prev, value];
        })
    };

    const moveInProgressTodo = (id) => {
        setInProgressItems((prev) => {
            return prev.filter((item, index) => {
                return id != index
            })
        })
    };

    const pushToCompleted = (value) => {
        setCompletedItems((prev) => {
            return [...prev, value]
        })
    };

    const moveCompletedTodo = (id) => {
        setCompletedItems((prev) => {
            return prev.filter((item, index) => {
                return id != index
            })
        })
    };

    return (
        <>
            {modal && <Modal className={classes.modal} setModal={setModal} createTodo={createTodo} />}
            <div className={classes.main}>
                <Todos listItems={todoItems} moveTodo={moveTodoHandler} pushToProgress={pushToProgress} />
                <InProgress listItems={inProgressItems} moveInProgressTodo={moveInProgressTodo} pushToCompleted={pushToCompleted} />
                <Completed listItems={completedItems} moveCompletedTodo={moveCompletedTodo} />
            </div>
            <button className={classes.create} onClick={showModalHandler}>Create</button>
        </>
    )
}

export default Body;