import React from 'react'
import { Theme, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CommentList from '../components/CommentList'
import { makeComments } from '../models/Comment'

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      fontFamily: '"IBM Plex Sans", Arial, Helvetica',
      width: 800,
      maxWidth: '80vw',
      margin: '20px auto'
    },
    media: {
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      }
    }
  }
})

const Home = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <img
        className={classes.media}
        alt="Kokanee Creek is also known as Depot Creek"
        src="https://www.waterfallsnorthwest.com/pictures/Depot_Creek_Falls_167.jpg"
      />
      <Typography gutterBottom variant="h2">
        Kokanee Exploratory Project
      </Typography>
      <Typography gutterBottom variant="h3">
        Welcome [candidate's name]!
      </Typography>
      <Typography gutterBottom variant="body1">
        Design a comment list component that automatically appends new messages as they arrive. Allow the user to choose
        whether or not to automatically “follow” as new messages arrive.
      </Typography>
      <Typography variant="body1">
        Use this provided <a href="https://github.com/themaven-net/web-kokanee-[candidate]">nextjs repo</a> for your
        work.
      </Typography>
      <Typography gutterBottom variant="body1">
        Please connect with [maven teammate], your Maven Teammate. Please treat this relationship as you would a normal
        colleague. If you have any questions about the code base, feel free to ask for an orientation. You are also
        invited, but not obligated, to submit a PR for the work and take feedback from the PR. Your teammate's github
        username is <code>[teammate github username]</code> and [teammate gender possessive] email is{' '}
        <code>[teammmate email]@maven.io</code>
      </Typography>
      <Typography gutterBottom variant="body1">
        Typescript is preferred, but JavaScript is acceptable.
      </Typography>
      <Typography gutterBottom variant="body1">
        You are welcome to design your own UX, if you wish, or we can supply some sample UX.
      </Typography>
      <Typography gutterBottom variant="body1">
        When you are ready to present, reach out to Jimmy and he’ll get a time scheduled for the demo.
      </Typography>
      <Typography gutterBottom variant="body1">
        Good luck!
      </Typography>
      <p>
        Have a look around the project and see if anything is helpful. be sure and take a look at models/Comment.ts and
        components/CommentList.tsx. (There is also a javascript version of the CommentList component, in
        components/ComponentListJS.jsx, if you prefer.)
      </p>
      <p>
        If you want to do something like create a new page route, the{' '}
        <a href="https://nextjs.org/docs/basic-features/pages">nextjs docs</a> are quite useful.{' '}
      </p>
      <CommentList initialComments={makeComments(10)} />
      <p>
        Extra credit 1: ensure the CommentList can load a large number (~ 10,000) of comments.
        Extra credit 2: Ensure there are no duplicate messages in the stream.
      </p>
    </div>
  )
}

export default Home
