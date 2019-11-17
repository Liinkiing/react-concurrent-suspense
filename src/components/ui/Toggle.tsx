import React, {useCallback, useState} from 'react'
import styled, {css} from 'styled-components/macro'
import {darken} from 'polished'
import {lightDark, white} from '../../styles/module/colors'
import {DEFAULT_BOX_SHADOW} from '../../styles/module/variables'

interface Props {
  readonly initialValue?: boolean
  readonly onToggle?: (checked: boolean) => void
}

const ToggleInner = styled.div`
  cursor: pointer;
  width: 60px;
  height: 30px;
  background: ${darken(0.07, lightDark)};
  overflow: hidden;
  border-radius: 6px;
  ${DEFAULT_BOX_SHADOW};
  border: 2px solid ${white};
`

const ToggleHandle = styled.div<{ checked: boolean }>`
  transition: transform .15s cubic-bezier(.16,-0.48,.78,1.56);
  height: 100%;
  background: ${lightDark};
  width: 50%;
  ${props => props.checked && css`
    transform: translateX(100%);
  `}
`

const Toggle: React.FC<Props> = ({initialValue, onToggle, ...rest}) => {
  const [checked, setChecked] = useState(initialValue)
  const onClick = useCallback(() => {
    setChecked(c => {
      onToggle && onToggle(!c)
      return !c
    })
  }, [onToggle])

  return (
    <ToggleInner onClick={onClick} {...rest}>
      <ToggleHandle checked={checked!}/>
    </ToggleInner>
  )
}

Toggle.defaultProps = {
  initialValue: false
}

export default Toggle
