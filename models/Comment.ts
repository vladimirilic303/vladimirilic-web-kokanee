import {loremIpsum} from "lorem-ipsum"
import { name } from '../models/names'

export interface Comment {
    author: string
    message: string
    time: Date
}

const makeComment = ():Comment => ({
    author: name(),
    message: loremIpsum({ count: ~~(Math.random() * 3)}),
    time: new Date
})

export const makeComments = (count: number) => {
    const comments = []
    for(var i = 0; i < count; i++) {
        comments.push(makeComment())
    }
    return comments
}
