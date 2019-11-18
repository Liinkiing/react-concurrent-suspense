import React from 'react'
import styled from 'styled-components/macro'
import useApi from '../hooks/useApi'
import {Posts} from '../@types/api/JSONPlaceholderApi'
import {POSTS_COUNT} from '../utils/constants'

interface Props {
  readonly userId: number
}

const UserPostListInner = styled.ul`
  li {
    margin: 20px;
  }
`

const UserPostList: React.FC<Props> = ({userId}) => {
  const [{data: posts, isLoading}] = useApi<Posts>(`https://jsonplaceholder.typicode.com/user/${userId}/posts`)

  if (isLoading || !posts) {
    return <div>Loading...</div>
  }

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
