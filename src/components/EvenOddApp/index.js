// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const number = Math.floor(Math.random() * 101)
    this.setState(prevState => ({count: prevState.count + number}))
  }

  render() {
    const {count} = this.state
    let form
    if (count % 2 === 0) {
      form = 'Even'
    } else {
      form = 'Odd'
    }
    return (
      <div className="main-container">
        <div className="second-container">
          <h1>Count {count}</h1>
          <div>
            <p className="para">Count is {form}</p>
            <button onClick={this.onIncrement} type="button">
              Increment
            </button>
            <p>Increase By Random Number Between 0 to 100</p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
