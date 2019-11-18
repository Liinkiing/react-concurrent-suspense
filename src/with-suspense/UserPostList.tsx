import React from 'react'
import styled from 'styled-components/macro'
import JSResource from './Resource'
import {Posts} from '../@types/api/JSONPlaceholderApi'
import {POSTS_COUNT} from '../utils/constants'

interface Props {
  readonly userId: number,
}

const UserPostListInner = styled.ul`
  li {
    margin: 20px;
  }
`

const USER_POSTS_ENDPOINT = (userId: number) => `https://jsonplaceholder.typicode.com/user/${userId}/posts`


const UserPostList: React.FC<Props> = ({userId}) => {
  const {data: posts} = JSResource<Posts>(USER_POSTS_ENDPOINT(userId), () => fetch(USER_POSTS_ENDPOINT(userId)).then(r => r.json())).read()

  return (
    <UserPostListInner>
      {posts.slice(0, POSTS_COUNT).map(post =>
        <li key={post.id}>
          {post.id} - {post.body}
        </li>
      )}
    </UserPostListInner>
  )
}

export default UserPostList
