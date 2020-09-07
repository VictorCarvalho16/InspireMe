import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import Footer from '../components/Footer'
import Recommends from '../components/Recommends'
import Recents from '../components/Recents'
import Layout from '../components/Layout'

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
}))

function Home() {
  const classes = useStyles()

  return (
    <Layout page="Play Talks">
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Recommends />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Recents />
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
