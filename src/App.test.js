import React from 'react'
import {render} from '@testing-library/react'
import App from './App'

test('renders hello world', () => {
  const {getByText} = render(<App />)
  const helloEl = getByText(/hello world/i)
  expect(helloEl).toBeInTheDocument()
})
