import { Component } from "react";

class MonsterComponent extends Component {

    render() {
        const { monsters } = this.props
        
        return (
        <div>
          {monsters.map(monster => <h1>{monster.name}</h1>)}
        </div>
        )
    }
}

export default MonsterComponent