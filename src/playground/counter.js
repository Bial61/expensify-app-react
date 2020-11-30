let count = 0;

const render = () =>
{
    const template = (
        <div>
           <h1>Count :{count >=0 ? count : 0 }</h1>
           {count<0 && <p>Count can't be nagitive</p> }
           <button onClick={addOne}>+1</button>
           <button onClick={minusOne}>-1</button>
           <button onClick={reset}>Reset</button>
        </div>
    )
   ReactDOM.render(template,document.getElementById('app'))
}

const addOne = () => 
  { 
    count++ ;
    render();
  }

const minusOne = () =>
{
    count--;
    render()
}

const reset = () =>
{
    count=0;
    render()
}

render()