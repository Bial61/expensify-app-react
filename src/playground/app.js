class IndecsionApp extends React.Component
{
    constructor(props)
    {
        super(props)
        this.handleRemoveAll=this.handleRemoveAll.bind(this)
        this.handelPickDecsion=this.handelPickDecsion.bind(this)
        this.handleAddOption=this.handleAddOption.bind(this)
        this.handelDeleteOption=this.handelDeleteOption.bind(this)
        this.state=
        {
            options:props.options
        }
    }

    componentDidUpdate (prevProps,prevState)
    {
        if(prevState.options.length !== this.state.options.length)
        {
           const options= JSON.stringify(this.state.options)
           localStorage.setItem('options',options)
       }
    }

    componentDidMount ()
    {
       try
       {
       const json= localStorage.getItem('options')
       const options = JSON.parse(json)
       if(options)
       {
       this.setState(()=> ({options}))
       }
       }catch(e)
       {
           //DO NOTHING
       }
    }

    handelDeleteOption (option)
    {
        this.setState((prevState)=>
        {
            return (
                {
                    options:prevState.options.filter((chkOption)=> chkOption !== option)
                }
            )
        })
    }
    handleRemoveAll ()
    {
      this.setState((prevState)=>
      {
          return {
              options:[]
          }
      })
    }

   handelPickDecsion ()
   {
        const option= Math.floor(Math.random () * this.state.options.length)
        alert(this.state.options[option])
   }

   handleAddOption (option)
   {
       
      this.setState((prevState)=>
      {
          return {
              options:prevState.options.concat(option)
          }
      })
   }

    render ()
    {
        
       const title= 'Indecsion App'
       const subTitle='Put your life in the hands of a computer';
        return (
            <div>
             <Header title={title} subTitle={subTitle}/>
             <Action hasOption={this.state.options.length > 0} handelPickDecsion={this.handelPickDecsion}/>
             <Options options={this.state.options} handleRemoveAll={this.handleRemoveAll} handelDeleteOption={this.handelDeleteOption}/>
             <AddOption  handleAddOption={this.handleAddOption} options={this.state.options}/>
            </div>
        )
    }
}

IndecsionApp.defaultProps=
{
    options:[]
}

// class Header extends React.Component
// {
//    render ()
//    {
//        return (
//            <div>
//               <h1>{this.props.title}</h1>
//               <h3>{this.props.subTitle}</h3>
//            </div>
//        )
//    }
// }

const Header = (props) =>
{
    return (
        <div>
           <h1>{props.title}</h1>
           <h3>{props.subTitle}</h3>
        </div>
    )
}

// class Action extends React.Component
// {
    
//     render ()
//     {
//         return (
//             <div>
//                 <button disabled={!this.props.hasOption} onClick={this.props.handelPickDecsion}>What should i do ?</button>
//             </div>
//         )
//     }
// }

const Action = (props) =>
{
    return (
        <div>
            <button 
                 disabled={!props.hasOption}
                 onClick={props.handelPickDecsion}>
                 What should i do ?
            </button>
        </div>
    )
}
// class Options extends React.Component
// {
//     constructor (props)
//     {
//       super(props)
//     }

//     render ()
//     {
//         return (
//             <div>
//                  {
//                      this.props.options.map ((option)=> <Option key={option} option={option}/>)
//                  }
//               <button onClick={this.props.handleRemoveAll}>Remove All</button>
//             </div>
//               )
//     }
// }


const Options = (props) =>
{
    
    return (
        <div>
         {props.options.length === 0 && <p>Please add an option to continue</p>}
             {
                 props.options.map ((option)=> <Option key={option} option={option} handelDeleteOption={props.handelDeleteOption}/>)
             }
            <button 
              onClick={props.handleRemoveAll}>
              Remove All
            </button>
        </div>
          )
}

class AddOption extends React.Component
{
    constructor(props)
    {
        super(props)
        this.handleAddOptions=this.handleAddOptions.bind(this)
        this.state=
        {
            error:undefined
        }
    }
    handleAddOptions (e)
    {
        e.preventDefault();
        const option = e.target.elements.option.value.trim()
        if(!option)
        {
            this.setState(()=>
            {
                return {error:'Please add a option'}
            })
        }
        const duplicate= this.props.options.find((chk)=> chk == option)
        if(duplicate)
        {
            this.setState(()=>
            {
                return {error:'Already added Option'}
            })
        }
        if(option && !duplicate)
        {
            e.target.elements.option.value=''
            this.props.handleAddOption(option)
            this.setState(()=>
            {
                return {error:undefined}
            })
        }
       
    }
   render ()
   {
       return (
           <div>
           {this.state.error && <p>{this.state.error}</p>}
               <form onSubmit={this.handleAddOptions}>
                   <input type="text" placeholder="Option" name="option"/>
                   <button>Add Option</button>
               </form>
           </div>
       )
   }
}

// class Option extends React.Component
// {
//     render ()
//     {
//         return (
//             <div>
//                <p>{this.props.option}</p>
//             </div>
//         )
//     }
// }

const Option = (props) => 
(
    <div>
       <p>{props.option}</p>
       <button onClick={(e)=>{props.handelDeleteOption(props.option)}}>Remove</button>
    </div>
)




ReactDOM.render (<IndecsionApp />,document.getElementById('app'))