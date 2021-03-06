import { Component } from "react";
import './card-container.styles.css'

class MonsterCard extends Component {
    render () {
        console.log(this.props)
        const { id, name, email } = this.props.monster
        return (
            <div className="card-container" key={id}>
            <img alt={`Monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
            <h2>{name}</h2>
            <p>{email}</p>
          </div>

        )
    }}
    
export default MonsterCard