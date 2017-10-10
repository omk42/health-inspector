import React from 'react'
import 'font-awesome/css/font-awesome.css'
import './SearchBar.css'
import PropTypes from 'prop-types'

class SearchBar extends React.Component{

  constructor (){
    super()
    this.state = {
      search: ''
    }

  }

  handleSearchChange = (event_) => {
    this.setState({
      [event_.target.name]: event_.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateSearchTerm(this.state.search)
  }

  render(){
    return (
      <div className ="searchbar-container">
        <form className = "search-form">
          <input
            type="search"
            name= "search"
            value= {this.state.search}
            className= "search-input"
            placeholder= "Search restaurants"
            onChange= {this.handleSearchChange}
          />
          <button
            type= "submit"
            className= "search-button"
            onClick= {this.hanleSubmit}
          >
            <i className= "search-icon fa fa-search" />
          </button>
        </form>
      </div>
    )
  }
}

PropTypes.PropTypes= {
  updateSearchTerm: PropTypes.func.isRequired
}

export default SearchBar
