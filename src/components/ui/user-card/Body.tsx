import React from 'react'
import styled from 'styled-components/macro'

interface Props {

}

const BodyInner = styled.div`
  flex: 3;
`

const Body: React.FC<Props> = ({ children }) => {

  return (
    <BodyInner>
      {children}
    </BodyInner>
  )
}

export default Body
