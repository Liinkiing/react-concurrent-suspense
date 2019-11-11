import React from 'react';
import './App.css';
import UserList from './non-concurrent/UserList'

const App: React.FC = () => {

  return (
    <div className="app">
      <h1>React Concurrent Mode + Suspense</h1>
      <h2>Render then fetch</h2>
      <UserList/>
    </div>
  );
}

export default App;
