import {
  megaColor,
  quinaColor,
  timeColor,
  lotoFacilColor,
  lotoManiaColor,
  sorteColor,
  white,
} from '../styles/Variables'

export const handleColor = (color: string) => {
  switch (color) {
    case 'mega-sena':
      return megaColor
    case 'quina':
      return quinaColor
    case 'lotofácil':
      return lotoFacilColor
    case 'lotomania':
      return lotoManiaColor
    case 'timemania':
      return timeColor
    case 'dia de sorte':
      return sorteColor
    case 'white':
      return white
    default:
      return megaColor
  }
}
