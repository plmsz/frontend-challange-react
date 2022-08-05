import styled from 'styled-components'
import { background } from './../../styles/Variables'

export const Container = styled.div`
  background-color: ${background};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`
