import styled from 'styled-components/'
import arrow from '../../assets/arrow.svg'
import {
  background,
  megaColor,
  quinaColor,
  timeColor,
  lotoFacilColor,
  lotoManiaColor,
  sorteColor,
  black600,
  white,
} from './../../styles/Variables'

interface ContainerProps {
  bgColor: string
}

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
    default:
      return megaColor
  }
}

export const Background = styled.header<ContainerProps>`
  background-color: ${(props) => handleColor(props.bgColor)};
  position: relative;
  overflow: hidden;
  &:after {
    content: '';
    position: absolute;
    background: ${background};
    right: -10%;
    left: -10%;
  }
  @media (max-width: 768px) {
    width: 100%;
    min-height: 440px;
    &:after {
      bottom: 0;
      height: 120px;
      -webkit-clip-path: ellipse(50% 60% at 50% 100%);
      clip-path: ellipse(50% 60% at 50% 100%);
    }
  }
  @media (min-width: 768px) {
    min-width: 410px;
    &:after {
      top: 0;
      height: 100vh;
      right: -4%;
      left: -4%;
      -webkit-clip-path: ellipse(16% 50% at 98% 50%);
      clip-path: ellipse(15% 50% at 96% 50%);
    }

    @media (min-width: 1084px) {
      min-width: 600px;
      &:after {
        top: 0;
        min-height: 100vh;
        right: -4%;
        left: -4%;
        -webkit-clip-path: ellipse(16% 50% at 98% 50%);
        clip-path: ellipse(15% 50% at 96% 50%);
      }
    }
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 1.5rem;
  min-height: 46rem;

  .title {
    text-transform: uppercase;
    color: ${white};
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.7rem;
  }

  .titleDesktop {
    display: none;
  }

  @media (min-width: 768px) {
    align-items: start;
    padding-bottom: 4.6rem;
    padding-left: 9.2rem;
    height: 100%;
    .titleMobile {
      display: none;
    }
    .titleDesktop {
      display: block;
    }
    .subtitle {
      color: ${white};
      font-weight: 700;
      font-size: 2rem;
      line-height: 2.5rem;
    }
  }
`

export const Dropdown = styled.select`
  text-transform: uppercase;
  padding: 1.6rem 1.8rem;
  background-color: ${white};
  box-shadow: 0 4px 6px ${black600};
  border-radius: 0.6rem;
  border: transparent;
  width: 23.3rem;

  -webkit-appearance: none;
  -moz-appearance: none;
  background-repeat: no-repeat;
  background-position-x: 90%;
  background-position-y: 2.2rem;
  background-image: url(${arrow});
`
