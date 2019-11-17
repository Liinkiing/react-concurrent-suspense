import React from 'react';
import styled from 'styled-components/macro'
import {Users} from '../@types/api/JSONPlaceholderApi'
import UserListItem from './UserListItem'
import JSResource from './Resource'

const AppUserListItem = styled(UserListItem)``

const UserListContainer = styled.ul`
  display: grid;
  max-width: 1000px;
  margin: 0 auto;
  & ${AppUserListItem}:not(:last-of-type) {
    margin-bottom: 30px;
  }
`

const USERS_ENDPOINT = 'https://jsonplaceholder.typicode.com/users'
const resource = JSResource<Users>(USERS_ENDPOINT, () => fetch(USERS_ENDPOINT).then(r => r.json()))

const UserList: React.FC = () => {
  const { data: users } = resource.read()

  return (
    <div className="user-list">
      <h1>User List</h1>
      <UserListContainer>
        {users.map(u =>
          <AppUserListItem key={u.id} user={u}/>
        )}
      </UserListContainer>
    </div>
  );
}

export default UserList;
