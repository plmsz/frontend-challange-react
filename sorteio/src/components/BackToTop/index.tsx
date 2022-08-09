import { Container } from './style'
import { useEffect, useState } from 'react'
import Icon from './icon'

export function BackToTop() {
  const [showButton, setShowButton] = useState(false)

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
          <Icon onClick={goBackTop} />
        </Container>
      )}
    </>
  )
}
