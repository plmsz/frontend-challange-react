import { useContext } from 'react'
import DrawContext from '../context/DrawContext/index'

function useDrawContext() {
  return useContext(DrawContext)
}

export default useDrawContext
