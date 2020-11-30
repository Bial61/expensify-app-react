import {createStore,combineReducers} from 'redux'
import uuid from 'uuid'


//ACTIONS GENERTATORS OF EXPENSE

//ADD_EXPENSE

const addExpense = ({
    description='',
    note='',
    amount=0,
    startDate= 0 
    }={}) => ({
    type:'ADD_EXPENSE',
    expense: 
    {
    id:uuid(),
    description,
    note,
    amount,
    startDate
    }
})

//REMOVE_EXPENSE

const removeExpense = (id) => ({
    type:'REMOVE_EXPENSE',
    id
})


//EDIT_EXPENSE

const editExpense = (id,updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
})


//FILTERS ACTION

const setTextFilter = (text) =>({
    type:'SET_TEXT',
    text
})


//SORT_BY_DATE

const sortBydate = () =>({
    type:'SORT_BY_DATE'
})

//SORT_BY_AMOUNT

const sortByAmount = () =>({
    type:'SORT_BY_AMOUNT'
})

//SET_START_DATE

const setStartDate = (startDate) =>({
    type:'SET_START_DATE',
    startDate
})

//SET_END_DATE

const setEndDate = (endDate) => ({
    type:'SET_END_DATE',
    endDate
})

const demoState= 
{
    expenses:[{
        id:123,
        description:'demo',
        note:'demo note',
        amount:'1233',
        createdAt:0,

    }],
    filters:
    {
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
}


//Expense Reducer

const defaultExpenseState=[]
const expenseReducer = (state=defaultExpenseState,action) =>
{
   switch(action.type)
   {
       case 'ADD_EXPENSE':
           return [
               ...state,
               action.expense
           ]
       case 'REMOVE_EXPENSE' :
           return state.filter(({id})=> (id !== action.id))    
       case 'EDIT_EXPENSE' :
                return   state.map(( expense)=>
                   {
                      if(expense.id === action.id)
                      {
                          return {
                              ...expense,
                             ...action.updates
                          }
                      }else
                      {
                          return expense
                      }
                   })   
       default:
           return state
   }
}

//Filter Reducer

const defaultFilterState= {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}
const filterReducer = (state = defaultFilterState,action) =>
{
     switch (action.type)
     {
         case 'SET_TEXT' :
             return {
                 ...state,
                 text:action.text
             }
        case 'SORT_BY_AMOUNT' :
            return {
                ...state,
                sortBy:'amount'
            }
        case 'SORT_BY_DATE' :
            return {
                ...state,
                sortBy:'date'
            } 
        case 'SET_START_DATE' :
           return {
               ...state,
               startDate:action.startDate
           }
        case 'SET_END_DATE' :
            return {
                ...state,
                endDate:action.endDate
            }               
         default:
             return state ;
     }
}

const store = createStore (combineReducers(
    {
        expenses:expenseReducer,
        filters:filterReducer
    }
))

store.subscribe(()=>
{
    console.log(store.getState())

})

// const exp1=store.dispatch(addExpense())
// const exp2=store.dispatch(addExpense({amount:200}))
// store.dispatch(removeExpense(exp1.expense.id))
// store.dispatch(editExpense(exp2.expense.id+'sa',{amount:300}))
// store.dispatch(setTextFilter('bilal'))
// store.dispatch(sortByAmount())


store.dispatch(setStartDate(123))
store.dispatch(setEndDate(123))
store.dispatch(setStartDate())