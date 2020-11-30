import React from 'react';
import {connect} from 'react-redux'
import { addExpense } from '../redux/actions/expenses';
import ExpenseForm from './ExpenseForm'

const AddExpensePage = (props) => (
  <div>
    This is from my add expense component
    <ExpenseForm onSubmit={({description,amount,note}={})=>
    {
         props.dispatch(addExpense({description,amount,note}))
         props.history.push('/')
    }} />
  </div>
);

export default connect()(AddExpensePage)
