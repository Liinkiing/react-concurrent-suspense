import React from 'react'
import styled from 'styled-components/macro'
import Body from './Body'
import Header from './Header'
import {DEFAULT_BOX_SHADOW} from '../../../styles/module/variables'

interface Props {

}

type UserCardComponent = React.FC<Props> & { Body: typeof Body } & { Header: typeof Header }

const UserCardInner = styled.div`
  display: flex;
  background: whitesmoke;
  overflow: hidden;
  border-radius: 6px;
  ${DEFAULT_BOX_SHADOW};
`

const UserCard: UserCardComponent = ({children}) => {

  return (
    <UserCardInner>
      {children}
    </UserCardInner>
  )
}

UserCard.Body = Body

UserCard.Header = Header

export default UserCard
