import styled, { keyframes } from 'styled-components/'
import { handleColor } from '../../helpers/handleColor'

export const Heading = styled.h1`
  text-align: center;
  color: ${(props) => handleColor(props.color || 'white')};
  font-size: 2.4rem;
  @media (min-width: 768px) {
    font-size: 2.6rem;
  }
`

export const opacityAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${opacityAnimation} 1s infinite;
`
