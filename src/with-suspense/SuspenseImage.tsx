import React from 'react'
import styled from 'styled-components/macro'
import JSResource from './Resource'

interface Props {
  readonly src: string,
  readonly alt?: string,
}

const SuspenseImage: React.FC<Props> = ({ src, alt, ...rest }) => {
  const resource = JSResource(src, () => new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = () => {
      resolve(src)
    }
    image.onerror = error => {
      reject(error)
    }
    image.src = src
  }))
  resource.read()
  return (
    <img src={src} {...rest} alt={alt ? alt : ''}/>
  )
}

export default SuspenseImage
