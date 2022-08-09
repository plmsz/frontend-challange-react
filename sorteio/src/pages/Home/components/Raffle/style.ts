import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  text-align: center;
  padding: 0 3.7rem 2rem;

  @media (min-width: 768px) {
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    gap: 0.5rem;
  }
  @media (min-width: 995px) {
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 9.7rem;
    padding-bottom: 9.7rem;
  }

  footer > span {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: black;
    opacity: 0.5;
  }
  .visibility {
    display: none;
  }
`
