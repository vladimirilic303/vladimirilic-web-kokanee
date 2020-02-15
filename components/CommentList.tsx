import { Comment, subscribe } from '../models/Comment'
import {useEffect, useState} from 'react'

export interface CommentListProps {
  initialComments: Comment[]
}

const CommentList: React.FC<CommentListProps> = props => {
  const [count, setCount] = useState(props.initialComments.length)
  useEffect(() => {
    subscribe(comment => {
      console.log('received comment: ', comment)
      setCount(count + 1)
    })
  }, [count])

  return <div>
    [YOU CAN PUT COMMENT LIST COMPONENT HERE, OR ANYWHERE YOU WANT REALLY!]
    there are {count} comments so far.
  </div>
}

export default CommentList
