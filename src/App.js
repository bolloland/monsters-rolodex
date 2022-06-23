
import './App.css';
import { Component } from 'react';


class App extends Component {
  constructor() {
    super();

//initial State
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
              }
          )
        })
    }
      
  
//what to show
  render() {
  return (
    <div className="App">
      <input className="searchbox" type="search" placeholder="search monsters..."
      onChange={(e) => {
        
        console.log(e.target.value)
        const filterMonsters = this.state.monsters.filter(
          monst => {return monst.name.toLowerCase().includes(e.target.value.toLowerCase()
          )})
          
        this.setState(()=> {
          return {monsters: filterMonsters}
        })
        

        }}>
        
      </input>

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
