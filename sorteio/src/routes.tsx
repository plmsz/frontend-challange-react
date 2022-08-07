import { useRoutes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Error } from './pages/Error'
import { NotFound } from './pages/NotFound'

export const Routes = (): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null => {
  const elements = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/error', element: <Error /> },
    { path: '/*', element: <NotFound /> },
  ])

  return elements
}
