import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Fab from '@material-ui/core/Fab'
import Tooltip from '@material-ui/core/Tooltip'
import CardMedia from '@material-ui/core/CardMedia';
import ContentAdd from '@material-ui/icons/Add'
import { pink, yellow } from '@material-ui/core/colors'

import backgroundImage from '../assets/images/background.jpg'

import Footer from '../components/Footer'
import Layout from '../components/Layout'

const pink500 = pink['500']
const yellow200 = yellow['200']

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  paperAnotation: {
    backgroundColor: yellow200,
    borderRadius: 5,
    marginBottom: '1rem',
    minHeight: 100
  },
  video: {
    minHeight: '80vh'
  },
  anotation: {
    minHeight: '80vh'
  },
  fab: {
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    marginRight: 20,
    backgroundColor: pink500
  },
  textArea: {
    backgroundColor: 'transparent',
    border: 'none'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    margin:'auto 0'
  }
}))

function Home() {
  const classes = useStyles()

  return (
    <Layout page="Play Talks">
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <Paper className={clsx(classes.paper, classes.video)}>
              <CardMedia
                className={classes.media}
                image={backgroundImage}
                src="https://www.youtube.com/watch?v=vwoqx_JqOWI"
              />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={clsx(classes.paper, classes.anotation)}>
              <Paper className={clsx(classes.paper, classes.paperAnotation)} >
                <TextareaAutosize rowsMin={4} className={classes.textArea} />
              </Paper>
              <Paper className={clsx(classes.paper, classes.paperAnotation)} >
                <TextareaAutosize rowsMin={4} className={classes.textArea} />
              </Paper>
              <Paper className={clsx(classes.paper, classes.paperAnotation)} >
                <TextareaAutosize rowsMin={4} className={classes.textArea} />
              </Paper>
              <Paper className={clsx(classes.paper, classes.paperAnotation)} >
                <TextareaAutosize rowsMin={4} className={classes.textArea} />
              </Paper>
              <Tooltip title="Add" aria-label="add">
                <Fab
                  size="small"
                  color="secondary"
                  className={classes.fab}
                >
                  <ContentAdd />
                </Fab>
              </Tooltip>
            </Paper>
          </Grid>
        </Grid>
        <Box pt={4}>
          <Footer />
        </Box>
      </Container>
    </Layout>
  )  
}

export default Home
