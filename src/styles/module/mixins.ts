import {css, CSSObject, FlattenSimpleInterpolation} from 'styled-components/macro'

export const breakpoint = (size: 'mobile' | 'tablet' | 'desktop', innerCss: FlattenSimpleInterpolation | TemplateStringsArray | CSSObject) => {
  let px;
  switch (size) {
    case "mobile":
      px = 420;
      break;
    case "tablet":
      px = 768;
      break;
    case "desktop":
      px = 992;
      break;
  }

  return css`
    @media screen and (max-width: ${px}px) {
      ${innerCss}
    }
  `
}
export const mbBreakpoint = (size: 'mobile' | 'tablet' | 'desktop', innerCss: FlattenSimpleInterpolation | TemplateStringsArray | CSSObject) => {
  let px;
  switch (size) {
    case "mobile":
      px = 420;
      break;
    case "tablet":
      px = 768;
      break;
    case "desktop":
      px = 992;
      break;
  }

  return css`
    @media screen and (min-width: ${px}px) {
      ${innerCss}
    }
  `
}

export const customScrollbar = css`
    &::-webkit-scrollbar {
      width: 0.5rem;
      padding-right: 10px;
    }

    &::-webkit-scrollbar-track {
      display: none;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      position:absolute;
      background-color: rgba(0, 0, 0, 0.3);
    }
`
