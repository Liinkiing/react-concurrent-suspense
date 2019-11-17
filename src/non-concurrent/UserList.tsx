import React from 'react';
import useApi from '../hooks/useApi'
import {Users} from '../@types/api/JSONPlaceholderApi'
import UserPostList from './UserPostList'


const UserList: React.FC = () => {
    const [{ data: users, isLoading }] = useApi<Users>('https://jsonplaceholder.typicode.com/users')

    if (isLoading || !users) {
        return <div>Loading...</div>
    }
    return (
        <div className="user-list">
            <h1>User List</h1>
            <ul>
                {users.map(u =>
                    <li key={u.id}>
                        {u.name}
                        <h2>Posts</h2>
                        <UserPostList userId={u.id}/>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default UserList;
