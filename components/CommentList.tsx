import { Comment } from '../models/Comment'

export interface CommentListProps {
    initialComments: Comment[]

}
const CommentList: React.FC<CommentListProps> = props => {
    return <div>
        [YOU CAN PUT COMMENT LIST COMPONENT HERE, OR ANYWHERE YOU WANT REALLY!]
    </div>
}

export default CommentList
