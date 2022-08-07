import { render, screen } from '@testing-library/react'
import Loading from '.'
import { quinaColor, white } from './../../styles/Variables'

it('should render the heading with the color pass in the props', () => {
  render(
    <Loading color='quina' image={false}>
      Carregando ...
    </Loading>,
  )

  const heading = screen.getByRole('heading', { name: /Carregando/i, exact: false })
  expect(heading).toHaveStyle({ color: `${quinaColor}` })
})
it('should render with the right color and an image if it was pass in the props', () => {
  render(
    <Loading color='white' image={true}>
      Aposte, hoje pode ser o seu dia!
    </Loading>,
  )

  const heading = screen.getByRole('heading', { name: /aposte/i, exact: false })
  expect(heading).toHaveStyle({ color: `${white}` })
  const image = screen.getByTitle('clover')
  expect(image).toBeInTheDocument()
})
