import { Comment, subscribe } from '../models/Comment'
import { useEffect } from 'react'

export interface CommentListProps {
  initialComments: Comment[]
}
const CommentList: React.FC<CommentListProps> = props => {
  useEffect(() => {
    subscribe(comment => {
      console.log('received comment: ', comment)
    })
  }, [])
  return <div>[YOU CAN PUT COMMENT LIST COMPONENT HERE, OR ANYWHERE YOU WANT REALLY!]</div>
}

export default CommentList
