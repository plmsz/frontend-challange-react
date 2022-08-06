import styled from 'styled-components/'
import { white } from '../../../styles/Variables'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 830px) {
    flex-direction: row;
    gap: 2rem;
  }
  @media (min-width: 1084px) {
    flex-direction: row;
    gap: 2.3rem;
  }
  h1 {
    text-transform: uppercase;
    color: ${white};
    font-weight: 700;
    font-size: 3rem;
    line-height: 3.7rem;
  }
`
