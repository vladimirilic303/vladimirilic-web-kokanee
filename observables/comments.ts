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
export const comments$FromContext = React.useContext(CommentContext)
export const commentsSubscribeEffect: (callback: (comment: Comment) => any) => void =
(callback) =>
  React.useEffect(() => {
    let unsubscribe = comments$.subscribe(callback)
    return unsubscribe.unsubscribe.bind(unsubscribe)
  })

// Or we could abstract this a step further
//export const subscribeEffect: <T>(observable: Observable<T>) => (callback: (value: T) => any) => void =
//(callback) =>
  //React.useEffect(() => {
    //let unsubscribe = observable.subscribe(callback)
    //return unsubscribe.unsubscribe.bind(unsubscribe)
  //})
//
//export const commentsSubscribeEffect(comments$)
