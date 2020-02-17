import { Comment } from '../models/Comment'
import { useState } from 'react'
import { commentsSubscribeEffect } from '../observables/comments'

const CommentList: React.FC = props => {
  const [ comments, setComments ] = useState<Comment[]>([])
  commentsSubscribeEffect((comment) => setComments([...comments, comment]))
  return <div>
    [YOU CAN PUT COMMENT LIST COMPONENT HERE, OR ANYWHERE YOU WANT REALLY!]
    there are {comments.length} comments so far.
  </div>
}

export default CommentList
