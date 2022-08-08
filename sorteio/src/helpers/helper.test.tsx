import { handleColor } from './handleColor'
import { formatDate } from './formatDate'
import { megaColor, quinaColor, timeColor, lotoFacilColor, lotoManiaColor, sorteColor } from '../styles/Variables'

it('should return the right color', () => {
  const mega = handleColor('mega-sena')
  expect(mega).toBe(`${megaColor}`)
  const quina = handleColor('quina')
  expect(quina).toBe(`${quinaColor}`)
  const lotofácil = handleColor('lotofácil')
  expect(lotofácil).toBe(`${lotoFacilColor}`)
  const timemania = handleColor('timemania')
  expect(timemania).toBe(`${timeColor}`)
  const diaDeSorte = handleColor('dia de sorte')
  expect(diaDeSorte).toBe(`${sorteColor}`)
  const lotoMania = handleColor('lotomania')
  expect(lotoMania).toBe(`${lotoManiaColor}`)
})

it('should return a default color', () => {
  const random = handleColor('random')
  expect(random).toBe(`${megaColor}`)
})

it('should return a date in the correct format', () => {
  const formattedDate = formatDate('2022-07-31T11:00:16.918Z')
  expect(formattedDate).toBe('31/07/2022')
})
