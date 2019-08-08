import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

describe('<App />', () => {
  it('renders without crashing using ReactDOM', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders without crashing', () => {
    render(<App />)
  })

  it('renders Hello There!', () => {
    const app = render(<App />)

    app.getByText(/hello there!/i)
  })
})
