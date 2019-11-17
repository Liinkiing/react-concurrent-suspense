import React from 'react'
import UserList from './UserList'

const WithoutSuspense: React.FC = () => {
  return (
    <React.Fragment>
      <h2>Fetch on Render</h2>
      <UserList />
    </React.Fragment>
  )
}

export default WithoutSuspense
