import { Component } from "react";
import './card-list.styles.css'
import './card-container.styles.css'
import MonsterCard from './MonsterCard'


class MonsterContainer extends Component {

    render() {
        const { monsters } = this.props
        
        return (
        <div className='card-list'>
          {monsters.map(monster => {
            return (
              <MonsterCard monster={monster} className="card-container" />
            )})}
        </div>
        )
    }
}


export default MonsterContainer

      