import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

const renderWithRouter = (ui: JSX.Element, route: string) => {
  window.history.pushState({}, 'test page', route)

  return {
    user: userEvent,
    ...render(ui, { wrapper: BrowserRouter }),
  }
}

export * from '@testing-library/react'

export { renderWithRouter as render }
