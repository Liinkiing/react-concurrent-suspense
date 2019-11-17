import {css} from 'styled-components/macro'
import {black, white} from './colors'

interface HeadingsProperties {
  [heading: string]: {
    fontSize: number,
    margin: string
  }
}

const headings: HeadingsProperties = {
  h1: {
    fontSize: 3,
    margin: '20px 0'
  }, h2: {
    fontSize: 2,
    margin: '15px 0'
  }, h3: {
    fontSize: 1.5,
    margin: '12px 0'
  }, h4: {
    fontSize: 1.25,
    margin: '8px 0'
  }, h5: {
    fontSize: 1,
    margin: '4px 0'
  }
}

export default css`
  @import url('https://fonts.googleapis.com/css?family=Alata|Nunito:300,400,700&display=swap');  
  
  body {
    color: ${black};
    font-family: 'Nunito', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }
  
  ${Object.entries(headings).map(entry =>
    css`${entry[0]} {
      font-size: ${entry[1].fontSize}rem;
      margin: ${entry[1].margin};
      font-family: Alata, sans-serif;
    }`
  )}

`
