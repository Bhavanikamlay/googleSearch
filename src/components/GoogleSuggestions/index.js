// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  arrowButton = value => {
    this.setState({searchInput: value})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const updatedList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google"
        />
        <div className="container">
          <div className="search-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="icon"
            />
            <input
              type="search"
              className="search-1"
              placeholder="Search Google"
              onChange={this.onChangeInput}
              value={searchInput}
            />
          </div>
          <ul className="unordered-list">
            {updatedList.map(eachItem => (
              <SuggestionItem
                key={eachItem.id}
                details={eachItem}
                arrowButton={this.arrowButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
