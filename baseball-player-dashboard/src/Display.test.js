import React from 'react'
import Display from './components/Display.js'
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

describe('<Display />', () => {
  it('renders without crashing', () => {
    render(<Display />)
  })
})
