import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import Display from '../components/Display'

describe('<Display />', () => {
  it('renders without crashing', () => {
    render(<Display />)
  })
})
