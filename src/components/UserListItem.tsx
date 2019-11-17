import React from 'react'
import styled from 'styled-components/macro'
import {User} from '../@types/api/JSONPlaceholderApi'
import UserCard from './ui/user-card'

interface Props {
  readonly user: User
}

const UserListItemInner = styled.div`
  
`

const UserListItem: React.FC<Props> = ({ user, ...rest }) => {
  return (
    <UserListItemInner {...rest}>
      <UserCard>
        <UserCard.Header>
          <UserCard.Header.BackgroundImage url={`https://picsum.photos/200?id=${user.id}`}/>
          <UserCard.Header.ProfileImage title={user.name} alt={user.name} url={`https://source.unsplash.com/collection/1475825/400x300?id=${user.id}`}/>
          {/*<UserCard.Header.Metadata>*/}
          {/*  <span>{user.name}</span>*/}
          {/*  <span>{user.email}</span>*/}
          {/*</UserCard.Header.Metadata>*/}
        </UserCard.Header>
        <UserCard.Body>
        </UserCard.Body>
      </UserCard>
    </UserListItemInner>
  )
}

export default UserListItem
