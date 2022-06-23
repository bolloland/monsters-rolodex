
import './App.css';
import { Component } from 'react';


class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {first: "Lego", second: "Bricks?"},
      company: 'RMB'
    }
  }

  render() {
  return (
    <div className="App">
      <header className="App-header"> 
      <p>DONDE ESTA MI {this.state.name.first} {this.state.name.second}!, I work at {this.state.company}</p>
      <button onClick={()=>{
        this.setState({ name: {first: "bobby", second: "peru"} })
        console.log(this.state)
      }}>Change Name</button>
      </header>
     
    </div>
  );
}
}

export default App;
