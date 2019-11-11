import React from 'react';
import useApi from '../hooks/useApi'
import {Users} from '../@types/api/JSONPlaceholderApi'


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
                    <li key={u.id}>{u.name}</li>
                )}
            </ul>
        </div>
    );
}

export default UserList;
