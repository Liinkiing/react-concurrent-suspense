import * as ReactDOM from 'react-dom'

declare module 'react-dom' {
    declare function createRoot(element: HTMLElement)
}
