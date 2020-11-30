import {createStore} from 'redux'


//ACTION GENERATORS

const incrementBy = ({incrementBy=1}={}) => ({

    type:'INCREMENT',
    incrementBy
})

const decrementBy = ({decrementBy=1}={}) => ({
    type:'DECREMENT',
    decrementBy
})

const reset = () =>({
    type:'RESET'
})

//Reducers

// Reducers are pure functions
// Never Chnge state or action


const countReducer = (state={count:0},action)=>
{
    switch(action.type)
    {
        case 'INCREMENT' :
        return {
            count: state.count + action.incrementBy
        };

        case 'DECREMENT' :
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count:0
            }    
        default :
        return state ;   
    }
    
}


//STORE
const store = createStore(countReducer)


store.subscribe(()=>
{
console.log(store.getState())
  
})

//INCREMENT ACTION

store.dispatch(incrementBy({incrementBy:45}))


//DECREMENT

store.dispatch(decrementBy({decrementBy:30}))

//RESET

store.dispatch(reset())


