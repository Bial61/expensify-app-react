import {addExpense,removeExpense,editExpense} from '../../redux/actions/expenses'

test('should setup remove expense object ', () => {
   const result = removeExpense('123')
   expect(result).toEqual({
       type:'REMOVE_EXPENSE',
       id:'123'
   })
})


test('should setup edit expense object', () => {
    const result = editExpense('123',{
        description:'Changed'
    })

    expect(result).toEqual({
        type:'EDIT_EXPENSE',
        id:'123',
        updates:{
            description:'Changed'
        }
    })
})


test('should setup add expense object with expected values', () => {
    const addExpenseData = 
    {
        description:'Any',
        note:'Any',
        amount:123.12,
        createdAt:1222
    }
   
    const result = addExpense (addExpenseData)
    expect(result).toEqual({
        type:'ADD_EXPENSE',
        expense:
        {
            ...addExpenseData,
            id:expect.any(String)
        }
    })
})


test('should setup add expense action object without values', () => {
    
   const result= addExpense();
   expect(result).toEqual({
       type:'ADD_EXPENSE',
       expense:
       {
           id:expect.any(String),
           description:'',
           note:'',
           amount:0,
           createdAt:0
       }
   })
})
