import React from 'react'


export default class ExpenseForm extends React.Component
{
    constructor (props)
    {
        super(props)
    this.state =
    {
        description:props.expense ? props.expense.description : '' ,
        note:props.expense ? props.expense.note : '' ,
        amount:props.expense? props.expense.amount : '' ,
        error:undefined
    };
    }
    onChangeDescription = (e) =>
    {
       const description = e.target.value ;
       this.setState(()=> ({description}))
    }

    onChangeNote = (e) =>
    {
        const note = e.target.value ;
        this.setState(()=>({note}))
    }

    onChangeAmount = (e) =>
    {
       const amount = e.target.value ;
       if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
       {
           this.setState(()=>({amount}))
       }

    }

    onAddExpense = (e) =>
    {
        e.preventDefault()
         if(!this.state.description || !this.state.amount)
         {
             this.setState(()=> ({error:'Description & amount are required fields.'}))
         }
         else
         {
             this.setState(()=>({error:undefined}))
             this.props.onSubmit({
                 description:this.state.description,
                 amount:this.state.amount,
                 note:this.state.amount
             })
             
         }
    }

    render ()
    {
        return (
            <div>
                <form onSubmit={this.onAddExpense}>
                   <input 
                            type="text"
                             placeholder="Description"
                             value={this.state.description}
                             onChange={this.onChangeDescription}
                             />
                    <input 
                          type="text"
                          placeholder="Amount"
                          value={this.state.amount}
                          onChange={this.onChangeAmount}
                    />
                  
                    <textarea 
                       placeholder="Add a note about your expense"
                       value={this.state.note}
                       onChange={this.onChangeNote}
                       >
                    </textarea>
                    <button>{this.props.expense ? 'EDIT EXPENSE' : 'ADD EXPENSE'}</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
               
            </div>
        )
    }
}

