const template = (
    <div>
       <h1>Visibilty Toggle</h1>
       <button onClick={showDetails}>{showDetails}</button>
       <p>{}</p>
    </div>
)

const showDetails = () =>
{
  let details= ''
  let nameButton='show details'
}

class Visibility extends React.Component
{
  constructor(props)
  {
    super(props)
    this.onVisibilityChange=this.onVisibilityChange.bind(this)
    this.state=
    {
      visibility:false,
      details:'Your details'
    }
  }
  onVisibilityChange()
  {
    this.setState((prevState)=>
    {
       return  {
            visibility:!prevState.visibility
         }
       
    })
  }
  render ()
  {
    return (
      <div>
             <h1>Visibility Toggle</h1>
             <button onClick={this.onVisibilityChange}>{this.state.visibility ? 'hide deatils' : 'show details'}</button> 
             {this.state.visibility && <p>{this.state.details}</p>}
      </div>
    )
  }
}

ReactDOM.render(<Visibility />,document.getElementById('app'))