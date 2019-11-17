import React from 'react'
import styled from 'styled-components/macro'
import {dark, lightBlue, white} from '../../../styles/module/colors'
import {DEFAULT_BOX_SHADOW, PICTURE_BOX_SHADOW, USER_CARD_BORDER_RADIUS} from '../../../styles/module/variables'

interface Props {

}

interface ImageProps {
  url: string,
  title?: string,
  alt?: string
}

type HeaderComponent =
  React.FC<Props>
  & { BackgroundImage: typeof BackgroundImage }
  & { ProfileImage: typeof ProfileImage }
  & { Metadata: typeof Metadata }

const BackgroundImageInner = styled.img`
  object-fit: cover;
  border-radius: ${USER_CARD_BORDER_RADIUS}px 0 0 ${USER_CARD_BORDER_RADIUS}px;
`

const BackgroundImage: React.FC<ImageProps> = ({url, alt, ...rest}) => {
  return (
    <BackgroundImageInner {...rest} src={url} alt={alt ? alt : 'Background picture'}/>
  )
}

const ProfileImageInner = styled.img`
  object-fit: cover;
  border-radius: 100%;
  border: 3px solid ${white};
  ${PICTURE_BOX_SHADOW};
`

const ProfileImage: React.FC<ImageProps> = ({url, alt, ...rest}) => {
  return (
    <ProfileImageInner {...rest} src={url} alt={alt ? alt : 'Profile picture'}/>
  )
}

const MetadataInner = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  & > * {
    padding: 5px;
    border-radius: 3px;
    background: ${lightBlue};
    opacity: 0.7;
    color: ${dark};
    font-size: 0.8rem;
    margin: 4px;
    &:first-of-type {
      margin-top: 10px;
    }
  }
`

const Metadata: React.FC = ({children, ...rest}) => {
  return (
    <MetadataInner {...rest}>{children}</MetadataInner>
  )
}

const PROFILE_IMAGE_RATIO = 70;

const HeaderInner = styled.header`
  flex: 1;
  position: relative;
  width: 200px;
  max-width: 200px;
  min-width: 200px;
  height: 200px;
  max-height: 200px;
  min-height: 200px;
  ${DEFAULT_BOX_SHADOW};
  z-index: -1;
  & ${ProfileImageInner}, ${BackgroundImageInner} {
    position:absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }
  & ${ProfileImageInner} {
    width: ${PROFILE_IMAGE_RATIO}%;
    height: ${PROFILE_IMAGE_RATIO}%;
    left: calc((100% - ${PROFILE_IMAGE_RATIO}%) / 2);
    top: calc((100% - ${PROFILE_IMAGE_RATIO}%) / 2);
  }
  & ${MetadataInner} {
    position:absolute;
    top: 100%;
  }
`

const Header: HeaderComponent = ({children}) => {
  return (
    <HeaderInner>
      {children}
    </HeaderInner>
  )
}

Header.BackgroundImage = BackgroundImage

Header.Metadata = Metadata

Header.ProfileImage = ProfileImage

export default Header
