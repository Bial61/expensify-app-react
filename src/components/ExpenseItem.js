import React from 'react'
import {Link} from 'react-router-dom'

const ExpenseItem = (props) => 
{
    return (
    <div>
    <Link to={`/edit/${props.id}`}>
        <h1>{props.description}</h1> 
    </Link>
        
        {props.amount}-{props.createdAt}
        
    </div>
)
}


export default ExpenseItem