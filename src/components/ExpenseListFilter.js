import React from 'react'
import {connect} from 'react-redux'
import {setTextFilter,sortByAmount,sortBydate,sortByDate} from '../redux/actions/filters'

const ExpenseListFilter = (props) => (
    <div>
         <input value={props.filters.text} type="text" placeholder="Filter Expenses" onChange={(e)=>
        {
              props.dispatch(setTextFilter(e.target.value))       
        }}/>

        <select 
           value={props.filters.sortBy}
           onChange={(e)=>
        {
            if(e.target.value === "date")
            {
                dispatch(sortByDate())
            }else if (e.target.value === "amount")
            {
                dispatch(sortByAmount())
            }
        }}
           >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
    </div>
)

const mapStateToProps = (state) =>
{
   return {
       filters:state.filters
   }
}

export default connect(mapStateToProps)(ExpenseListFilter)