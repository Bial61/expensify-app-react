import React from 'react'
import {connect} from 'react-redux'
import ExpenseItem from './ExpenseItem'
import ExpenseListFilter from './ExpenseListFilter'
import filteredExpenses from '../redux/selectors/expenses'

const ExpenseList = (props) => (
    <div>
       <h1>Expense List</h1>
       <ExpenseListFilter/>
       {
          props.expenses.map((expense)=>
          {
            return <ExpenseItem key={expense.id} {...expense}/>
          })
       }
              
    </div>
)


const mapStateToProps = (state) =>
{
 return({
   
    expenses: filteredExpenses (state.expenses,state.filters)
   
       }) 
}

export default connect(mapStateToProps)(ExpenseList)