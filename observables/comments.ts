import * as React from 'react'
import { Comment, makeComment, makeComments } from '../models/Comment'
import { interval, Observable } from 'rxjs'
import { delayWhen, take, map } from 'rxjs/operators'

export const comments$: Observable<Comment> = interval(1000).pipe(
  map(makeComment),
  delayWhen(() => interval(Math.random() * 1000 + 2000)),
  take(1),
)

export const CommentContext = React.createContext({comments$})
