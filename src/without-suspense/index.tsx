import React from 'react'
import UserList from './UserList'

const WithoutSuspense: React.FC = () => {
  return (
    <React.Fragment>
      <h2>Render then fetch</h2>
      <UserList />
    </React.Fragment>
  )
}

export default WithoutSuspense
