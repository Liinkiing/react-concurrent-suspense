import {createGlobalStyle} from 'styled-components/macro'
import {white} from './module/colors'
import bootstrap from './bootstrap'
import {customScrollbar} from './module/mixins'

export default createGlobalStyle`
  ${bootstrap};
  
  * {
    box-sizing: border-box;
  }
  
  html {
    font-size: 100%;
  }
  
  body {
    background: ${white};
    &.overflow {
      overflow: hidden;
      height: 100vh;
    }
    ${customScrollbar};
  }
  
`
