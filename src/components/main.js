import React from 'react'
import Grid from '@material-ui/core/Grid';
import SquaredBg from '../styles/blocks/SquareBlockBg';

const Main =  () => {
  return (
    <div>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={6} style={{height:'400px'}}>
              <SquaredBg >
                <SquaredBg.Title>Title</SquaredBg.Title>
              </SquaredBg>
        </Grid>
        <Grid item xs={12} sm={6} style={{height:'400px'}}>
              a
        </Grid>
      </Grid>
    </div>
  )
}



export default Main;