import styled from 'styled-components/'

import { white } from '../../styles/Variables'

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
