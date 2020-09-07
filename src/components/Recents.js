import React from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Favorite from '@material-ui/icons/Favorite'

import Title from './Title'

function createData(id, date, name, carrer, stars, amount) {
  return { id, date, name, carrer, stars, amount }
}

const rows = [
  createData(0, '16 Ago, 2020', 'Elvis Presley', 'Cantor', '5', 312.44),
  createData(1, '16 Ago, 2020', 'Paul McCartney', 'Músico', '5', 866.99),
  createData(2, '16 Ago, 2020', 'Tom Scholz', 'Compositor', '5', 100.81),
  createData(3, '16 Ago, 2020', 'Michael Jackson', 'Dançarino', '5', 654.39),
  createData(4, '15 Ago, 2020', 'Bruce Springsteen', 'Cantor', '5', 212.79)
]

function preventDefault(event) {
  event.preventDefault()
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}))

function Orders() {
  const classes = useStyles();
  return (
    <>
      <Title>Últimos Talks</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Carreira</TableCell>
            <TableCell>Avalização</TableCell>
            <TableCell align="right">Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.carrer}</TableCell>
              <TableCell>{row.stars} <Favorite color="error" /></TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver Mais
        </Link>
      </div>
    </>
  );
}

export default Orders
