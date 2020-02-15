import { loremIpsum } from 'lorem-ipsum'
import { name } from './names'

export interface Comment {
  id: number,
  author: string
  message: string
  time: Date
}

let nextId = 1

let lastComment: Comment

export const makeComment = (): Comment => {
  if (Math.random() < 0.5 && lastComment) {
    return lastComment
  }
  let comment = {
    id: nextId++,
    author: name(),
    message: loremIpsum({ count: ~~(Math.random() * 3) }),
    time: new Date()
  }
  lastComment = comment
  return comment
}


export const makeComments = (count: number) => {
  const comments = new Array(count)
  return comments.map(makeComment)
}
