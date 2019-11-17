import React from 'react';
import UserList from './non-concurrent/UserList'
import styled from 'styled-components/macro'

const AppInner = styled.div`

`

const App: React.FC = () => {

  return (
    <AppInner>
      <h1>React Concurrent Mode + Suspense</h1>
      <h2>Render then fetch</h2>
      <UserList/>
    </AppInner>
  );
}

export default App;
