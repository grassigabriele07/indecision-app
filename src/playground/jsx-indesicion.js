console.log('App is running');


//statements

// creazione dell'oggetto dell'app
const app = {
    title: 'Titolo dell\'app',
    subtitle: 'Questo è il sotto titolo',
    options: []
};


const onFormSubmit = (e) => {
    e.preventDefault();

    // ottengo il valore del campo
    const option = e.target.elements.option.value;
    
    // inserisco il valore nell'array
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}

// JSX - JavaScript XML


// creazione pulizia array
const onRemoveAll = () => {
    app.options = [];
    render();
};


const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

//creazione della funzione di render

const appRoot = document.getElementById('app');


const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Qui le tuo opzioni' : 'Non ci sono opzioni'}</p>
            {/* <p>{app.options.length}</p> */}
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Rimuovi tutto</button>
            <ol>
            {
                app.options.map((option) => <li key={option}>Option: {option}</li> )
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);

}

render();
