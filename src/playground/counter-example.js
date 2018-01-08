class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    handleAddOne(){
        // console.log('handleAddOne');
        // this.state.count = this.state.count + 1;
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne(){
        // console.log('handleMinusOne');
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset(){
        // console.log('handleReset');
        this.setState(() => {
            return {
                count: 0
            };
        });
        
        // this.setState((prevState) => {
        //     return {
        //         count: prevState.count + 1
        //     };
        // });
    
        // this.setState({
        //     count: 0
        // });
    
        // this.setState({
        //     count: this.state.count + 1
        // });
    }

    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

// creazione di 3 metoni: handleAddOne, handleMinusOne, handleReset
// use console.log per stampare il nome del metodo
// al onClick lagalo al costruttore

ReactDOM.render(<Counter />, document.getElementById('app'));


// crea un template 
// div
//  h1 -> Nome e cognome
//  p -> Eta
//  p -> Località
//render il template

// var userName = 'Gabriele Grassi';
// var userAge = 27;
// var userLocation = 'Saronno';

//***

// const user = {
//     name: 'Gabriele Grassi',
//     age: 26,
//     location: 'Saronno'
// };

// function getLocation(location){
//     if(location){
//         return <p>Location: {location}</p>;
//     } else {
//         return undefined;
//     }
// }

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonimo'}</h1>
//         { (user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );

// ***/

// let count = 0;
// const someId = 'myIdHere';

// const addOne = () => {
//     count++;
//     // console.log('addOne', count);
//     renderCounterApp();
// }

// const minusOne = () => {
//     count--;
//     // console.log('-1');
//     renderCounterApp();

// }

// const reset = () => {
//     count = 0;
//     // console.log('reset');
//     renderCounterApp();
// }


// // button -1 - minusOne
// // reset button

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button id={someId} className="button" onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo , appRoot);
// }

// renderCounterApp();