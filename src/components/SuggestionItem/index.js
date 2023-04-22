// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {details, arrowButton} = props
  const {suggestion} = details

  const arrowClick = () => {
    arrowButton(suggestion)
  }

  return (
    <li className="list-item">
      <p className="para">{suggestion}</p>
      <button type="button" className="btn" onClick={arrowClick}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
