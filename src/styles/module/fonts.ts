import {css} from 'styled-components/macro'
import {white} from '../module/colors'

export default css`
  @import url('https://fonts.googleapis.com/css?family=Alata|Nunito:300,400,700&display=swap');  
  
  body {
    color: ${white};
    font-family: 'Nunito', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }
  
  ${Object.entries({ h1: 3, h2: 2, h3: 1.5, h4: 1.25, h5: 1}).map(entry =>
    css`${entry[0]} {
      font-size: ${entry[1]}rem;
      font-family: Alata, sans-serif;
    }`
)}
`
