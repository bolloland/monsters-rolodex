
import './App.css';
import { Component } from 'react';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    }
  }

  //access API (lifecycle methods):
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json())
    //pull json data from API, and that data will fill the monsters array
    .then((users) => {
      this.setState(
        () => {
          return ({monsters: users})
              }, 
        () => {
          console.log(this.state)
              }
          )
        })
    }
      
  

  render() {
  return (
    <div className="App">
     {this.state.monsters.map((monst) => {
          return (
            <div key={monst.id}>
              <h1>{monst.name} from {monst.address.city}</h1>
            </div>)
        })}
    </div>
  );
}
}

export default App;
