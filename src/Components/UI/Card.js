import './Card.css';

function Card(props) { 
    //<div className="card expense-item">
    const classes = "card " + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default Card;