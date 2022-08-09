import styled, { keyframes } from 'styled-components'

export const move = keyframes`
0%
{
  transform: translateY(0px);
}
25%
{
  transform: translateY(20px);
}
50%
{
  transform: translateY(0);
}
75%
{
  transform: translateY(-20px);
}
100%
{
  transform: translateY(0px);
}
`

export const Container = styled.span`
  position: relative;
  svg {
    position: fixed;
    bottom: 2.4rem;
    right: 1.1rem;
    z-index: 20;
    cursor: pointer;
    animation: move 3s ease-in-out infinite;
    transition: all 0.5s ease-in-out;
  }
`
