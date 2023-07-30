import { useRef, useState } from "react";
import classes from './Modal.module.css';

const Modal = (props) => {
    const [todo, setTodo] = useState('');
    const inputRef = useRef();

    const inputChangeHandler = () => {
        setTodo(inputRef.current.value);
    };

    const todoSubmitHandler = (e) => {
        e.preventDefault();
        if(todo.trim().length === 0){
          return;
        }
        props.createTodo(todo);
        inputRef.current.value = '';
        props.setModal(false);
    };

    const closeModalHandler = () => {
    props.setModal(false);
    }
    return (
      <div className={classes.backdrop}>
      <form onSubmit={todoSubmitHandler}>
        <input type="text" onChange={inputChangeHandler} placeholder="enter todo" ref={inputRef}  />
        <div>
        <button>Create</button>
        <button type="button" onClick={closeModalHandler}>Close</button>
        </div>
      </form>
      </div>
    )
}

export default Modal;