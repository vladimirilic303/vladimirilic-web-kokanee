import {Theme, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import CommentList from "../components/CommentList";
import {makeComments} from "../models/Comment";

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
  return <div className={classes.root}>
    <img className={classes.media} src="https://www.waterfallsnorthwest.com/pictures/Depot_Creek_Falls_167.jpg" />
    <Typography variant="h2">Kokanee Exploratory Project</Typography>
    <Typography variant="body1">Design a comment list component that automatically appends new messages as they arrive. Allow the user to choose whether or not to automatically “follow” as new messages arrive.</Typography>

    <Typography variant="body1">Use this provided nextjs repo [url] and [branch] for your work.</Typography>

    <Typography variant="body1">You are permitted to ask questions to your [name of teammate], your Maven Teammate You are also permitted to submit a PR for the work and take feedback from the PR.</Typography>

    <Typography variant="body1">Typescript is preferred, but JavaScript is acceptable.</Typography>

    <Typography variant="body1">You are welcome to design your own UX, if you wish, or we can supply some sample UX.</Typography>

    <Typography variant="body1">When you are ready to present, reach out to Jimmy and he’ll get a time scheduled for the demo.</Typography>

    <Typography variant="body1">Good luck!</Typography>

    <CommentList initialComments={makeComments(10)} />
  </div>
}

export default Home
