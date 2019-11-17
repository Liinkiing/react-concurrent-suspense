import React from 'react'
import styled from 'styled-components/macro'
import {DEFAULT_BOX_SHADOW, USER_CARD_BORDER_RADIUS} from '../../../styles/module/variables'

interface Props {

}

const BodyInner = styled.div`
  flex: 3;
  ${DEFAULT_BOX_SHADOW};
  padding: 20px;
  background: whitesmoke;
  border-radius: 0 ${USER_CARD_BORDER_RADIUS}px ${USER_CARD_BORDER_RADIUS}px;
  & h1:first-of-type, 
  & h2:first-of-type, 
  & h3:first-of-type, 
  & h4:first-of-type, 
  & h5:first-of-type, 
  & h6:first-of-type {
    margin-top: 0;
  }
`

const Body: React.FC<Props> = ({ children }) => {

  return (
    <BodyInner>
      {children}
    </BodyInner>
  )
}

export default Body
