import styled from 'styled-components/'
import arrow from '../../../assets/arrow.svg'
import { black600, white } from '../../../styles/Variables'

export const DropdownStyled = styled.select`
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

  option {
    text-transform: uppercase;
  }
`
