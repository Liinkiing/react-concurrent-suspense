import React, {Suspense} from 'react'
import styled from 'styled-components/macro'
import {User} from '../@types/api/JSONPlaceholderApi'
import UserCard from '../components/ui/user-card'
import SuspenseUserPostList from '../with-suspense/UserPostList'

interface Props {
  readonly user: User,
}

const UserListItemInner = styled.div`
  
`

const UserListItem: React.FC<Props> = ({user, ...rest}) => {
  return (
    <UserListItemInner {...rest}>
      <UserCard>
        <UserCard.Header>
          <UserCard.Header.BackgroundImage suspend url={`https://picsum.photos/200?id=${user.id}`}/>
          <UserCard.Header.ProfileImage suspend title={user.name} alt={user.name}
                                        url={`https://source.unsplash.com/collection/1475825/400x300?id=${user.id}`}/>
          <UserCard.Header.Metadata>
            <span>{user.name}</span>
            <span>{user.email}</span>
          </UserCard.Header.Metadata>
        </UserCard.Header>
        <UserCard.Body>
          <SuspenseUserPostList userId={user.id}/>
        </UserCard.Body>
      </UserCard>
    </UserListItemInner>
  )
}

export default UserListItem
