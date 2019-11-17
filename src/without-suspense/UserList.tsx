import React from 'react';
import styled from 'styled-components/macro'
import useApi from '../hooks/useApi'
import {Users} from '../@types/api/JSONPlaceholderApi'
import UserListItem from './UserListItem'

const AppUserListItem = styled(UserListItem)``

const UserListContainer = styled.ul`
  display: grid;
  max-width: 1000px;
  margin: 0 auto;
  & ${AppUserListItem}:not(:last-of-type) {
    margin-bottom: 30px;
  }
`

const UserList: React.FC = () => {
    const [{ data: users, isLoading }] = useApi<Users>('https://jsonplaceholder.typicode.com/users')

    if (isLoading || !users) {
        return <div>Loading...</div>
    }
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
