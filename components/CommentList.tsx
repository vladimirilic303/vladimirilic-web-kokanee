import { Comment, subscribe } from '../models/Comment'
import { useEffect, useState } from 'react'
import CommentListItem from './CommentListItem'

export interface CommentListProps {
  initialComments: Comment[]
  setLatestComment: (comment: any) => void
}

const CommentList: React.FC<CommentListProps> = ({ initialComments, setLatestComment }) => {
  const [count, setCount] = useState(initialComments.length)
  const [comments, setComments] = useState(initialComments)

  useEffect(() => {
    subscribe(comment => {
      if (!comments.some(commentInArray => commentInArray.message === comment.message)) {
        setComments([comment, ...comments])
        setLatestComment(comment)
      }
      setCount(count + 1)
    })
  }, [count])

  return (
    <div>
      <ul className="comment_list">
        {comments.map(comment => (
          <CommentListItem key={comment.id} comment={comment} />
        ))}
      </ul>
      there are {comments.length} comments so far.
    </div>
  )
}

export default CommentList
