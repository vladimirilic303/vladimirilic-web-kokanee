import { Comment } from '../models/Comment'

export interface CommentListItemProps {
  comment: Comment
}

const dateFormatter = (date: Date) => {
  return date.toLocaleDateString('en-US', { hour: '2-digit', minute: '2-digit' })
}

const CommentListItem: React.FC<CommentListItemProps> = ({ comment }) => {
  return (
    <li className="comment_list_item">
      <div className="comment_list_item_author">{comment.author}</div>
      <div className="comment_list_item_message">{comment.message}</div>
      <div className="comment_list_item_time">{dateFormatter(comment.time)}</div>
    </li>
  )
}

export default CommentListItem
