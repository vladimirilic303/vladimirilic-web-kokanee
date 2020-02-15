import { Comment } from '../models/Comment'
import { useEffect, useState, useContext } from 'react'
import { CommentContext } from '../observables/comments'

const CommentList: React.FC = props => {
  const [ comments, setComments ] = useState<Comment[]>([])
  const { comments$ } = useContext(CommentContext)
  useEffect(() => {
    let unsubscribe = comments$.subscribe((comment) => {
      setComments([...comments, comment])
    })
    return unsubscribe.unsubscribe.bind(unsubscribe)
  })
  return <div>
    [YOU CAN PUT COMMENT LIST COMPONENT HERE, OR ANYWHERE YOU WANT REALLY!]
    there are {comments.length} comments so far.
  </div>
}

export default CommentList
