import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from "../UI/Card";

const Expenses = (props) => {
    return (
        <Card className='expenses'>
            <div>
                <ExpenseItem date={props.expenses[0].date} title={props.expenses[0].title} amount={props.expenses[0].amount}/>
            </div>
            <div>
                <ExpenseItem date={props.expenses[1].date} title={props.expenses[1].title} amount={props.expenses[1].amount}/>
            </div>
            <div>
                <ExpenseItem date={props.expenses[2].date} title={props.expenses[2].title} amount={props.expenses[2].amount}/>
            </div>
            <div>
                <ExpenseItem date={props.expenses[2].date} title={props.expenses[3].title} amount={props.expenses[3].amount}/>
            </div>
        </Card>
    )
};

export default Expenses;