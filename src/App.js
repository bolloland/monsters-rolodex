
import './App.css';
import { Component } from 'react';


class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Pantalones"
    }
  }

  render() {
  return (
    <div className="App">
      <header className="App-header"> 
      <p>DONDE ESTA MI {this.state.name}!</p>
      <button>Change Name</button>
      </header>
     
    </div>
  );
}
}

export default App;
