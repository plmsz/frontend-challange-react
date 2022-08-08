import { render, screen } from '@testing-library/react'
import { Background } from '.'
import { lotoManiaColor } from './../../../styles/Variables'
it('should render the background correctly', () => {
  render(<Background bgColor='lotomania'>Lotomania</Background>)
  const background = screen.getByRole('banner')
  expect(background).toHaveStyle({ backgroundColor: `${lotoManiaColor}` })
})
