import { loremIpsum } from 'lorem-ipsum'
import { name } from './names'

export interface Comment {
  id: number,
  author: string
  message: string
  time: Date
}

let nextId = 1

const makeComment = (): Comment => ({
  id: nextId++,
  author: name(),
  message: loremIpsum({ count: ~~(Math.random() * 3) }),
  time: new Date()
})

export const makeComments = (count: number) => {
  const comments = []
  for (let i = 0; i < count; i++) {
    comments.push(makeComment())
  }
  return comments
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
  }
  setTimeout(produce, interval)
}
