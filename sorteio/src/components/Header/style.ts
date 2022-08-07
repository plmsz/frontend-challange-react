import styled from 'styled-components/'
import { handleColor } from '../../helpers/handleColor'
import { background, white } from '../../styles/Variables'

interface ContainerProps {
  bgColor: string
}

export const Background = styled.header<ContainerProps>`
  background-color: ${(props) => handleColor(props.bgColor)};
  position: relative;
  overflow: hidden;
  &:after {
    content: '';
    position: absolute;
    background: ${background};
    right: -5%;
    left: -5%;
  }
  @media (max-width: 768px) {
    width: 100%;
    min-height: 46rem;
    &:after {
      bottom: 0;
      height: 7rem;
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
    @media (min-width: 830px) {
      min-width: 550px;
    }

    @media (min-width: 1084px) {
      min-width: 600px;
    }
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 1.5rem;
  min-height: 42rem;
  color: ${white};

  .titleDesktop {
    display: none;
  }

  @media (min-width: 768px) {
    align-items: start;
    padding-bottom: 4.6rem;
    padding-left: 9.2rem;
    height: 100%;

    h2 {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 1.7rem;
    }

    p {
      font-weight: 700;
      font-size: 2rem;
      line-height: 2.5rem;
    }

    .titleMobile {
      display: none;
    }
    .titleDesktop {
      display: block;
    }
  }
`
