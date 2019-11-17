import React from 'react'
import styled from 'styled-components/macro'
import useApi from '../hooks/useApi'
import {Posts, Users} from '../@types/api/JSONPlaceholderApi'
import PostCommentList from './PostCommentList'

interface Props {
    readonly userId: number
}

const UserPostListInner = styled.ul`
  
`

const UserPostList: React.FC<Props> = ({ userId }) => {
    const [{ data: posts, isLoading }] = useApi<Posts>(`https://jsonplaceholder.typicode.com/user/${userId}/posts`)

    if (isLoading || !posts) {
        return <div>Loading...</div>
    }

    return (
        <UserPostListInner>
            {posts.slice(0, 4).map(post =>
                <li key={post.id}>
                    {post.body}
                    <PostCommentList postId={post.id}/>
                </li>
            )}
        </UserPostListInner>
    )
}

export default UserPostList
