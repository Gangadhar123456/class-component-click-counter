// Write your code here
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.state(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.count

    return (
      <div className="bg-container">
        <h1 className="header">
          The Button has been clicked <span className="count">{count}</span>{' '}
          times
        </h1>
        <p className="description">Click the button to increase the count</p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Click Me
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
