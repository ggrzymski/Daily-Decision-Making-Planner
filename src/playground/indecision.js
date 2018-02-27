let app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value; // point to element that event started on

    if(option)
    {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderContent();
    }
};

const removeAll = (e) => {

    app.options = [];

    renderContent();
};

const listOptions = () => {
    return (
        app.options.map( (e) => {
        return <li key={e}> Option: {e}</li>
        })
    );
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const renderContent = () => {

let template =  (
  <div> 
      <h1>{app.title}</h1> 
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
          {listOptions()}
      </ol>

      <form onSubmit={onFormSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
      </form>
  </div>);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
}

//JSX does not have built-in binding. Need to rerun the code when data changes.

renderContent();

