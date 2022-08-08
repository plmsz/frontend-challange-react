import styled from 'styled-components'
import { white } from '../../../../../styles/Variables'

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding-inline-start: 0;
  justify-content: center;
  gap: 2.6rem;

  @media (min-width: 768px) and (max-width: 995px) {
    gap: 1rem;
  }
  li {
    background-color: ${white};
    border-radius: 50%;
    width: 6rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.4rem;
  }
`
