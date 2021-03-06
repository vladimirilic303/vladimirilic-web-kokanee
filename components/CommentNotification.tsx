import { Comment } from '../models/Comment'

export interface CommentNotificationProps {
  comment: Comment | null
}

const CommentNotification: React.FC<CommentNotificationProps> = ({ comment }) => {
  if (!comment) return null
  return (
    <div className="comment_notification">
      <div className="comment_notification_author">{comment.author}</div>
      <div className="comment_notification_message">{comment.message}</div>
    </div>
  )
}

export default CommentNotification
