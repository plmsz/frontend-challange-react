import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { DrawSelected } from '../../types/drawType'
import { Props } from '../../types/propsChildren'

type PropsDrawContext = {
  drawSelected: DrawSelected
  setDrawSelected: Dispatch<SetStateAction<DrawSelected>>
}

const DEFAULT_VALUE = {
  drawSelected: { loteria: 0, nome: '', id: '', data: '', numeros: [''] },
  setDrawSelected: () => undefined,
}

const DrawContext = createContext<PropsDrawContext>(DEFAULT_VALUE)

const DrawContextProvider = ({ children }: Props) => {
  const [drawSelected, setDrawSelected] = useState(DEFAULT_VALUE.drawSelected)
  return <DrawContext.Provider value={{ drawSelected, setDrawSelected }}>{children}</DrawContext.Provider>
}

export { DrawContextProvider }
export default DrawContext
