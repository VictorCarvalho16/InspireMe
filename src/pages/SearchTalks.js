import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Title from '../components/Title'

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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

function createData(id, name, carrer, stars, amount) {
  return { id, name, carrer, stars, amount }
}

const rows = [
  createData(0, 'Elvis Presley', 'Cantor', '5', 312.44),
  createData(1, 'Paul McCartney', 'Músico', '5', 866.99),
  createData(2, 'Tom Scholz', 'Compositor', '5', 100.81),
  createData(3, 'Michael Jackson', 'Dançarino', '5', 654.39),
  createData(4, 'Bruce Springsteen', 'Cantor', '5', 212.79)
]

function Home() {
  const classes = useStyles()

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <Layout page="Procurar Talks">
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Title>Filtros</Title>
              <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    id="name"
                    label="Nome"
                    name="name"
                    autoComplete="name"
                    type="search"
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    name="carrer"
                    label="Carreira"
                    id="carrer"
                    type="search"
                  />
                  <div>
                    <FormControlLabel
                      control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="favorite1" />}
                    />
                    <FormControlLabel
                      control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="favorite2" />}
                    />
                    <FormControlLabel
                      control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="favorite3" />}
                    />
                    <FormControlLabel
                      control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="favorite4" />}
                    />
                    <FormControlLabel
                      control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="favorite5" />}
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Buscar
                  </Button>
              </form>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Title>Talks Disponíveis</Title>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Nome</TableCell>
                    <TableCell>Carreira</TableCell>
                    <TableCell>Avalização</TableCell>
                    <TableCell align="right">Valor</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.carrer}</TableCell>
                      <TableCell>{row.stars} <Favorite color="error" /></TableCell>
                      <TableCell align="right">{row.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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
