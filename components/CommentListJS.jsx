import { subscribe } from '../models/Comment'
import { useEffect } from 'react'

const CommentList = props => {
    useEffect(() => {
        subscribe(comment => {
            console.log('received comment: ', comment)
        })
    }, [])
    return <div>[YOU CAN PUT COMMENT LIST COMPONENT HERE, OR ANYWHERE YOU WANT REALLY!]</div>
}

export default CommentList
