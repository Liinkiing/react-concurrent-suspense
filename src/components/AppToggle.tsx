import Toggle from './ui/Toggle'
import React, {useState} from 'react'
import {ReactMode} from '../App'
import styled, {css} from 'styled-components'
import {red, white} from '../styles/module/colors'
import {DEFAULT_BOX_SHADOW} from '../styles/module/variables'

interface Props {
  mode: ReactMode,
  onToggle: (checked: boolean) => void
}

const ToggleMode = styled.span<{ checked: boolean }>`
  ${props => props.checked && css`
    font-weight: 700; 
  `}
`

const CollapseToggle = styled.div`
  transition: all 0.3s;
  user-select: none;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-weight: 700;
  color: ${white};
  border-radius: 10px;
  background: ${red};
  position:absolute;
  bottom: 0;
  right: 0;
  opacity: 0;
  visibility: hidden;
  &:hover {
    cursor: pointer;
  }
`

const AppToggleInner = styled.div<{collapsed: boolean}>`
  transition: all 0.3s;
  user-select: none;
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  & > *:not(:last-child):not(${CollapseToggle}) {
    margin-right: 20px;
  }
  background: ${red};
  padding: 20px;
  color: ${white};
  ${DEFAULT_BOX_SHADOW};
  border-radius: 10px;
  width: 400px;
  height: 70px;
  
  ${props => props.collapsed && css`
    width: 20px;
    height: 20px;
    cursor: pointer;
    & > * {
      opacity: 0;
    }
  `}
  &:hover {
    & ${CollapseToggle} {
      opacity: 1;
      visibility: visible;
      ${props => !props.collapsed && css`
        transform: translateY(20px);
      `}
    }
  }
`

const AppToggle: React.FC<Props> = ({ mode, onToggle }) => {
  const [collapsed, setCollapsed] = useState(false)
  const onCollapse = () => {
    setCollapsed(c => !c)
  }
  return (
    <React.Fragment>
      <AppToggleInner collapsed={collapsed}>
        <CollapseToggle onClick={onCollapse}>
          {collapsed ? 'o' : 'x'}
        </CollapseToggle>
        <ToggleMode checked={mode === ReactMode.WithoutSuspense}>Without Suspense</ToggleMode>
        <Toggle initialValue={mode === ReactMode.WithSuspense} onToggle={onToggle}/>
        <ToggleMode checked={mode === ReactMode.WithSuspense}>With Suspense</ToggleMode>
      </AppToggleInner>
    </React.Fragment>
  )
}

export default AppToggle;
