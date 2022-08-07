import { DrawContextProvider } from './context/DrawContext'
import GlobalStyle from './styles/GlobalStyle'
import { Routes } from './routes'

function App() {
  return (
    <>
      <DrawContextProvider>
        <GlobalStyle />
        <Routes />
      </DrawContextProvider>
    </>
  )
}

export default App
