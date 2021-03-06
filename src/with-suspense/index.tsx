import React, { Suspense } from 'react'
import SuspenseImage from './SuspenseImage'
import UserList from './UserList'

const WithSuspense: React.FC = () => {
  return (
    <React.Fragment>
      <h2>Suspense Image</h2>
      <Suspense fallback={<div>LOADING...</div>}>
        <SuspenseImage src="https://picsum.photos/200?id=1"/>
        <SuspenseImage src="https://picsum.photos/200?id=2"/>
        <SuspenseImage src="https://picsum.photos/200?id=3"/>
        <SuspenseImage src="https://picsum.photos/200?id=4"/>
      </Suspense>
      <Suspense fallback={<div>LOADING USERS....</div>}>
        <UserList/>
      </Suspense>
    </React.Fragment>
  )
}

export default WithSuspense
