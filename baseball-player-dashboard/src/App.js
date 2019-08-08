import React, { useState } from 'react'

import Dashboard from './components/Dashboard'
import Display from './components/Display'

function App() {
  const [player, setPlayer] = useState([])
  const [balls, setBalls] = useState(0)
  const [fouls, setFouls] = useState(0)
  const [strikes, setStrikes] = useState(0)

  return (
    <div className="App">
      <Dashboard
        player={player}
        balls={balls}
        fouls={fouls}
        strikes={strikes}
      />
    </div>
  )
}

export default App
