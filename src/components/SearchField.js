import React from 'react'
import { Component } from 'react'

class SearchField extends Component {
    // onSearchChange = (e) => {
    //     const searchfield = e.target.value.toLowerCase()
    //       this.setState(() => {
    //         return {searchfield}
    //       })}

  render() {
        console.log(this.props)
        const {onSearchChange, placeholder, className} = this.props
        return (
            <input 
                className={className}
                type="search" 
                placeholder={placeholder}
                onChange={onSearchChange} 
            />
            
        )
    }
}


export default SearchField