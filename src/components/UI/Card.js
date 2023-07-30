import classes from './Card.module.css';

const Card = (props) => {
    return <div className={classes.blocks}>
        {props.children}
    </div>
}

export default Card;