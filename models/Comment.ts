import { loremIpsum } from 'lorem-ipsum'
import { name } from './names'
import {range, Subject} from 'rxjs'

export interface Comment {
  id: number
  author: string
  message: string
  time: Date
}

let nextId = 1

export const setupSubject = () => {
  const subject = new Subject<Comment>()
  subscribe(c => {
    subject.next(c)
  })
  return subject
}

const makeComment = (): Comment => {
  const comment = {
    id: nextId++,
    author: name(),
    message: loremIpsum({count: ~~(Math.random() * 3)}),
    time: new Date()
  }
  console.log('making comment', comment)
  return comment
}

export const produceComments = (comments: Subject<Comment>, count: number) => {
  range(0, 10).subscribe(() => comments.next(makeComment()))
}

let lastComment: Comment

const makeDupe = () => Math.random() < 0.1 && lastComment

export const subscribe = (callback: (comment: Comment) => void) => {
  const interval = Math.random() * 1000 + 2000
  console.log(`subscribing for next message, will arrive in ${interval.toFixed(0)} ms`)
  const produce = () => {
    // every once in a while we send a dupe message
    if (!makeDupe()) {
      lastComment = makeComment()
    }
    callback(lastComment)
    subscribe(callback)
  }
  setTimeout(produce, interval)
}
