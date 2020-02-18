import { Comment } from '../models/Comment'
import { useState, useEffect } from 'react'
import { useComments$ } from '../observables/comments'

const CommentList: React.FC = props => {
  const [ comments, setComments ] = useState<Comment[]>([])
  const { comments$ } = useComments$()
  const useComments$Subscribe: (callback: (comment: Comment) => any) => void =
    (callback) =>
      useEffect(() => {
        let subscription = comments$.subscribe(callback)
        return subscription.unsubscribe.bind(subscription)
      })
  useComments$Subscribe((comment) => setComments([...comments, comment]))
  return <div>
    [YOU CAN PUT COMMENT LIST COMPONENT HERE, OR ANYWHERE YOU WANT REALLY!]
    there are {comments.length} comments so far.
  </div>
}

export default CommentList
