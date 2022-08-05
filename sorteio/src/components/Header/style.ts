import styled from 'styled-components/'
import bgDesktop from '../../assets/Sidebar.png'
import {
  background,
  megaColor,
  quinaColor,
  timeColor,
  lotoFacilColor,
  lotoManiaColor,
  sorteColor,
} from './../../styles/Variables'

interface ContainerProps {
  bgColor: string
}
export const handleColor = (color: string) => {
  switch (color) {
    case 'megaColor':
      return megaColor
    case 'quinaColor':
      return quinaColor
    case 'lotoFacilColor':
      return lotoFacilColor
    case 'lotoManiaColor':
      return lotoManiaColor
    case 'timeColor':
      return timeColor
    case 'sorteColor':
      return sorteColor
    default:
      return megaColor
  }
}
export const Container = styled.header<ContainerProps>`
  background-color: ${(props) => handleColor(props.bgColor)};
  @media (max-width: 768px) {
    width: 100%;
    min-height: 440px;
    position: relative;
    overflow: hidden;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      right: -5%;
      left: -5%;
      height: 120px;
      background: ${background};
      -webkit-clip-path: ellipse(50% 60% at 50% 100%);
      clip-path: ellipse(50% 60% at 50% 100%);
    }
  }
  @media (min-width: 768px) {
    min-width: 610px;
    position: relative;
    overflow: hidden;
    &:after {
      content: '';
      position: absolute;
      background: ${background};
      top: 0px;
      right: -5%;
      left: -5%;
      height: 100vh;
      -webkit-clip-path: ellipse(16% 50% at 98% 50%);
      clip-path: ellipse(15% 50% at 96% 50%);
    }
  }
`
