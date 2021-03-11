import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 500px;
  background: lightblue;
`

export const LinkTo = styled(Link)`
  text-decoration: none;
  color: gray;
`
