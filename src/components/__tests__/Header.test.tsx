import { screen, render } from '@testing-library/react'

import { Header } from '..'

describe('Header component', () => {
  it('Should run?!', () => {
    render(<Header />)

    expect(screen.getByTestId('test')).toBeInTheDocument()
  })
})
