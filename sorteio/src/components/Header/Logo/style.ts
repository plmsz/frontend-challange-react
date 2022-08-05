import styled from 'styled-components/'
import { white } from '../../../styles/Variables'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-transform: uppercase;
    color: ${white};
    font-weight: 700;
    font-size: 3rem;
    line-height: 3.7rem;
  }
`
