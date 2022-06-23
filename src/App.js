
import './App.css';
import { Component } from 'react';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
      {id: 1, name: "Linda"}, 
      {id: 2, name: "Jack"},
      {id: 3, name: "Bobby"},
      {id: 4, name: "Ryan"}
      ]
    }
  }

  render() {
  return (
    <div className="App">
     {this.state.monsters.map((monst) => {
          return (
            <div key={monst.id}>
              <h1>{monst.name}</h1>
            </div>)
        })}
    </div>
  );
}
}

export default App;
