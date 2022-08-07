import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { DrawSelected } from '../../types/drawType'
import { Props } from '../../types/propsChildren'

type PropsDrawContext = {
  drawSelected: DrawSelected
  setDrawSelected: Dispatch<SetStateAction<DrawSelected>>
  errorMessage: boolean
  setMessageError: Dispatch<SetStateAction<boolean>>
}

const DEFAULT_VALUE = {
  drawSelected: { loteria: 0, nome: '', id: '', data: '', numeros: [''] },
  setDrawSelected: () => undefined,
  errorMessage: false,
  setMessageError: () => undefined,
}

const DrawContext = createContext<PropsDrawContext>(DEFAULT_VALUE)

const DrawContextProvider = ({ children }: Props) => {
  const [drawSelected, setDrawSelected] = useState(DEFAULT_VALUE.drawSelected)
  const [errorMessage, setMessageError] = useState(DEFAULT_VALUE.errorMessage)
  return (
    <DrawContext.Provider value={{ drawSelected, setDrawSelected, setMessageError, errorMessage }}>
      {children}
    </DrawContext.Provider>
  )
}

export { DrawContextProvider }
export default DrawContext
