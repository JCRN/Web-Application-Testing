import React from 'react'
import Dashboard from './components/Dashboard.js'
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

describe('<Dashboard />', () => {
  it('renders without crashing', () => {
    render(<Dashboard />)
  })

  it('should display a count provided on props', () => {
    let balls = 0
    let fouls = 0
    let strikes = 0
    const comp = render(
      <Dashboard balls={balls} fouls={fouls} strikes={strikes} />
    )
    const count = comp.getAllByTestId('count')
    expect(count).toHaveLength(3)
  })
})
