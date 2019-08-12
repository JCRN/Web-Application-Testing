import React, { Component } from 'react'
import Display from './components/Display'
import Dashboard from './components/Dashboard'

class App extends Component {
  constructor() {
    super()

    this.state = {
      balls: 0,
      strikes: 0
    }
  }

  ball = () => {
    let { balls, strikes } = this.state
    if (balls === 4 || strikes === 3) {
      balls = 0
      strikes = 0
    } else {
      balls++
    }
    this.setState({ balls, strikes })
  }

  foul = () => {
    let { strikes } = this.state
    if (strikes < 2) {
      strikes++
    }
    this.setState({ strikes })
  }

  hit = () => {
    this.setState({ balls: 0, strikes: 0 })
  }

  strike = () => {
    let { balls, strikes } = this.state
    if (strikes === 3) {
      strikes = 0
      balls = 0
    } else {
      strikes++
    }
    this.setState({ balls, strikes })
  }

  render() {
    return (
      <div className="App">
        <Display balls={this.state.balls} strikes={this.state.strikes} />
        <Dashboard
          ball={this.ball}
          foul={this.foul}
          hit={this.hit}
          strike={this.strike}
        />
      </div>
    )
  }
}

export default App
