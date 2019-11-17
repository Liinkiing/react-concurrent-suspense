import React, {useState} from 'react';
import styled from 'styled-components/macro'
import NonConcurrent from './non-concurrent'
import AppToggle from './components/AppToggle'

const AppInner = styled.div`

`

export enum ReactMode {
  WithoutSuspense = 'WITHOUT_SUSPENSE',
  WithSuspense = 'WITH_SUSPENSE'
}

const App: React.FC = () => {
  const [mode, setMode] = useState<ReactMode>(ReactMode.WithSuspense)

  return (
    <AppInner>
      <AppToggle mode={mode} onToggle={checked => {
        setMode(checked ? ReactMode.WithSuspense : ReactMode.WithoutSuspense)
      }}/>
      <h1>React Concurrent Mode + Suspense</h1>
      {mode === ReactMode.WithoutSuspense ?
        <NonConcurrent/> : <div>With Suspense</div>
      }
    </AppInner>
  );
}

export default App;
