import { Component } from 'react'
import Clock from './clocktest/clock'
import './App.css';

class App extends Component {

  state = {
    showClock: false
  }
  onShowHide = () => {
    this.setState(prevState => {
      const { showClock } = prevState
      return {
        showClock: !showClock,
      }
    })
  }
  render() {
    const { showClock } = this.state
    return (
      <div className="app-container">
        <button type="button" className="toggle-button" onClick={this.onShowHide}>
          {showClock ? "Hide Clock" : "Show Clock"}
        </button>
        {showClock && <Clock />}
      </div>
    )
  }
}
export default App;
