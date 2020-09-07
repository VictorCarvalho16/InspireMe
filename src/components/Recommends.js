import React from 'react'
import Grid from '@material-ui/core/Grid'

import Title from './Title'
import RecommendItem from './RecommendItem'

import avatar1 from '../assets/images/avatar_1.jpg'
import avatar2 from '../assets/images/avatar_2.jpg'
import avatar3 from '../assets/images/avatar_3.jpg'

function Deposits() {
  return (
    <>
     <Title>Talks Recomendados para você</Title>
      <Grid 
        container
        xs={12}
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={12} md={3}>
          <RecommendItem image={avatar1} name="Roberto Almeida" carrer="Engenheiro" />
        </Grid>
        <Grid item xs={12} md={3}>
          <RecommendItem image={avatar2} name="Ana Carolina" carrer="Digita Influencer" />
        </Grid>
        <Grid item xs={12} md={3}>
          <RecommendItem image={avatar3} name="Pedro Castro" carrer="Design" />
        </Grid>
      </Grid>
    </>
  )
}

export default Deposits
