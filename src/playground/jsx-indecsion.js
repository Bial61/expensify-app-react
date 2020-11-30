console.log('Running')

const app =
{
    title:'Indecsion App',
    subTitle:'Put your life in the hands of a computer.',
    options:[]
}

const onFormSubmit = (e) =>
{
    e.preventDefault()
    const option = e.target.elements.option.value
    if(option)
    {
        app.options.push(option) ;
        e.target.elements.option.value=''
    }
    render()
}

const removeOptions = () =>
{
    app.options=[]
    render()
}

const onDecision = () =>
{
    const option = Math.floor ( Math.random() * app.options.length )
    alert(app.options[option])
}

const render = () =>
{
    const jsx= (
        <div>
               <h1>{app.title}</h1>
               {app.subTitle && <p>{app.subTitle}</p>}
               {app.options && app.options.length > 0 ? 'Here are your options' : 'No Options'}
                <button disabled={app.options.length === 0} onClick={onDecision}>What should i do ?</button> 
               <ol>
                   {app.options.map((option)=> <li key={option}>{option}</li>)}
                </ol>
               <button onClick={removeOptions}>Remove All</button>
               <form onSubmit={onFormSubmit}>
                 <input type="text" name="option"/>
                 <button>Add Option</button>
               </form>
        </div>
)
ReactDOM.render (jsx,document.getElementById('app'))
}

render()

