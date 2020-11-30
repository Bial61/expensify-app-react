class Counter extends React.Component
{
    
    constructor (props)
    {
        super(props)
        this.handleAddCount=this.handleAddCount.bind(this)
        this.handleResetCount=this.handleResetCount.bind(this)
        this.handleMinusCount=this.handleMinusCount.bind(this)
        this.state =
       {
           count:0        
       }
    }
    handleAddCount()
    {
         this.setState((prevState)=>
         {
            return {
                 count: prevState.count + 1
            }
         })
    }
    handleMinusCount()
    {
       this.setState((prevState)=>
       {
           return {
               count: prevState.count - 1
           }
       })
    }
    handleResetCount()
    {
        this.setState(()=>
        {
            return {
                count : 0
            }
        })
    }
    render ()
    {
        return (
            <div>
              <h1>Count: {this.state.count}</h1>
              <button onClick={this.handleAddCount}>+1</button>
              <button onClick={this.handleMinusCount}>-1</button>
              <button onClick={this.handleResetCount}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />,document.getElementById('app'))