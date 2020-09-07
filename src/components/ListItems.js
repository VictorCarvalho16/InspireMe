import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PeopleIcon from '@material-ui/icons/People'
import LayersIcon from '@material-ui/icons/Layers'

const styles = {
  cleanLink: {
    color: 'inherit',
    textDecoration: 'none'
  }
}

function ListItems({page}) {

  return (
    <>
      <Link style={styles.cleanLink} to="/home">
        <ListItem button selected={page === "Home"}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>
      <Link style={styles.cleanLink} to="/search-talks">
        <ListItem button selected={page === "Procurar Talks"}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Procurar Talks" />
        </ListItem>
      </Link>
      <Link style={styles.cleanLink} to="/play-talk">
        <ListItem button selected={page === "Play Talks"}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Play Talks" />
        </ListItem>
      </Link>
    </>
  )
}

export default ListItems
