import React, { Component } from 'react'
import Display from './Display'

export default class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      balls: 0,
      fouls: 0,
      strikes: 0
    }
  }

  ballCount = () => {
    let { balls, strikes } = this.state
    if (balls === 4 || strikes === 3) {
      balls = 0
      strikes = 0
    } else {
      balls++
    }
    this.setState({ balls, strikes })
  }

  foulCount = () => {
    let { fouls, strikes } = this.state
    if (strikes > 1) {
      return
    } else {
      fouls++
      strikes++
    }
    this.setState({ fouls, strikes })
  }

  hit = () => {
    this.setState({ balls: 0, fouls: 0, strikes: 0 })
  }

  strikeCount = () => {
    let { strikes } = this.state
    strikes < 3 ? strikes++ : (strikes = 0)
    this.setState({ strikes })
  }

  render() {
    return (
      <div>
        <Display
          balls={this.state.balls}
          strikes={this.state.strikes}
          ballCount={this.ballCount}
          foulCount={this.foulCount}
          hit={this.hit}
          strikeCount={this.strikeCount}
        />
      </div>
    )
  }
}
