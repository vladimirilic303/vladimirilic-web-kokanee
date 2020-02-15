import {Comment, produceComments, subscribe} from '../models/Comment'
import React, { useEffect, useState } from 'react'
import { Subject } from 'rxjs'
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import { Person } from '@material-ui/icons'
import { scan } from 'rxjs/operators'

export interface CommentListProps {
  comments: Subject<Comment>
}

const CommentList: React.FC<CommentListProps> = props => {
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    props.comments.pipe(scan<Comment, Comment[]>((a, c) => [...a, c], [])).subscribe(setComments)
    produceComments(props.comments, 10)
  }, [])

  return (
    <List>
      {comments.map(c => (
        <ListItem key={c.id}>
          <ListItemAvatar>
            <Avatar>
              <Person />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={c.message} secondary={`${c.author}, ${c.time}`} />
        </ListItem>
      ))}
    </List>
  )
}

export default CommentList
