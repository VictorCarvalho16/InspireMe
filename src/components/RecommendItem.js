import React from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

function preventDefault(event) {
  event.preventDefault()
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  },
  box: {
    marginBottom: '1rem',
    padding: '1rem'
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: 100,
    marginBottom: '1rem'
  }
})

function RecommendItem({image, name, carrer}) {
  const classes = useStyles()

  return (
    <Box boxShadow={3} className={classes.box}>
      <img className={classes.img} alt="complex" src={image} />
      <Typography component="p">
          {name}
        </Typography>
        <Typography color="textSecondary" className={classes.depositContext}>
          {carrer}
        </Typography>
        <div>
          <Link color="primary" href="#" onClick={preventDefault}>
            Ver mais
          </Link>
      </div>
    </Box>
  )
}

export default RecommendItem
