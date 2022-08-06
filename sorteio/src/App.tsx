import { DrawContextProvider } from './context/DrawContext'
import { Home } from './pages/Home'
import GlobalStyle from './styles/GlobalStyle'

function App() {
  return (
    <>
      <DrawContextProvider>
        <GlobalStyle />
        <Home />
      </DrawContextProvider>
    </>
  )
}

export default App
