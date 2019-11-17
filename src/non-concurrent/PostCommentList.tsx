import React, {useMemo} from 'react'
import styled from 'styled-components/macro'
import useApi from '../hooks/useApi'
import {Comments} from '../@types/api/JSONPlaceholderApi'
import {randomRange} from '../utils/numbers'

interface Props {
    readonly postId: number
}

const PostCommentListInner = styled.ul`
  
`

const PostCommentList: React.FC<Props> = ({postId}) => {
    const maxCount = useMemo(() => randomRange(1, 10), [])
    const [{data: comments, isLoading}] = useApi<Comments>(`https://jsonplaceholder.typicode.com/post/${postId}/comments`)

    if (isLoading || !comments) {
        return <div>Loading...</div>
    }
    return (
        <PostCommentListInner>
            {comments.slice(0, maxCount).map(comment =>
                <li key={comment.id}>{comment.email}: {comment.body}</li>
            )}
        </PostCommentListInner>
    )
}

export default PostCommentList
