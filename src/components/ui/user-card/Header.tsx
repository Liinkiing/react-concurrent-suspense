import React from 'react'
import styled from 'styled-components/macro'
import {white} from '../../../styles/module/colors'
import {PICTURE_BOX_SHADOW} from '../../../styles/module/variables'

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

const BackgroundImageInner = styled.img`
  object-fit: cover;
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

const PROFILE_IMAGE_RATIO = 70;

const HeaderInner = styled.header`
  flex: 1;
  position: relative;
  min-width: 100px;
  max-width: 200px;
  min-height: 200px;
  overflow: hidden;
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
`

const Header: HeaderComponent = ({children}) => {
  return (
    <HeaderInner>
      {children}
    </HeaderInner>
  )
}

Header.BackgroundImage = BackgroundImage

Header.ProfileImage = ProfileImage

export default Header
