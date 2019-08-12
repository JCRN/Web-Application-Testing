import React from 'react'
import { Button } from 'semantic-ui-react'

import '../stylesheets/dashboard.css'

const Dashboard = props => {
  return (
    <div className="buttons-wrapper">
      <Button fluid onClick={props.ball}>
        BALL
      </Button>
      <Button fluid onClick={props.foul}>
        FOUL
      </Button>
      <Button fluid onClick={props.strike}>
        STRIKE
      </Button>
      <Button fluid onClick={props.hit}>
        HIT!!
      </Button>
    </div>
  )
}

export default Dashboard
