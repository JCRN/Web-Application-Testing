import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import Dashboard from '../components/Dashboard'

describe('<Dashboard />', () => {
  it('renders without crashing', () => {
    render(<Dashboard />)
  })
})
