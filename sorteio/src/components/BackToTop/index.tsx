import { Container } from './style'
import { useEffect, useState } from 'react'
import Icon from './Icon'
import useDrawContext from '../../hooks/useDrawContext'
import { handleColor } from '../../helpers/handleColor'

export function BackToTop() {
  const [showButton, setShowButton] = useState(false)
  const { drawSelected } = useDrawContext()
  const color = handleColor(drawSelected.nome)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  const goBackTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {showButton && (
        <Container>
          <Icon onClick={goBackTop} color={color} />
        </Container>
      )}
    </>
  )
}
