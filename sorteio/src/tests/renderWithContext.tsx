import { render } from '@testing-library/react'
import { DrawContextProvider } from '../context/DrawContext'

const renderWithContext = (ui: JSX.Element, providerProps?: any, ...renderOptions: any) => {
  return render(<DrawContextProvider {...providerProps}>{ui}</DrawContextProvider>, renderOptions)
}
export * from '@testing-library/react'

export { renderWithContext as render }
