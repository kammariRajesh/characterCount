// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  typingText = event => {
    const n = event.target.value
    return this.setState(prev => ({count: prev.count + n.length}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card1">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="input">Enter the phrase</label>
          <input
            id="input"
            type="text"
            placeholder="Enter the phrase"
            className="input"
            onChange={this.typingText}
          />
          <p className="btn" id="text">
            No.of letters: {count}
          </p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="Letters Calculator"
          className="img"
        />
      </div>
    )
  }
}

export default LettersCalculator
