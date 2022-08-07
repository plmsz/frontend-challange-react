import styled from 'styled-components/'
import { quinaColor, backgroundSecondary, white, megaColor } from './Variables'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  background-color: ${backgroundSecondary};
`
export const Heading = styled.h1`
  color: ${quinaColor};
  font-size: 2rem;

  @media (min-width: 425px) {
    font-size: 2.5rem;
  }
  @media (min-width: 500px) {
    margin: 0.3rem;
    font-size: 3.6rem;
  }
  @media (min-width: 768px) {
    margin: 2rem;
  }
`
export const ButtonStyled = styled.button`
  padding: 0.8em;
  border: none;
  outline: none;
  background: ${quinaColor};
  color: ${white};
  font-size: 1.4rem;
  margin: 1em;
  border-radius: 1rem;

  &:hover {
    cursor: pointer;
    background: ${megaColor};
    transition: 0.1s all ease-in-out;
  }
`
