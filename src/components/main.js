import React from 'react'
import Grid from '@material-ui/core/Grid'
import GridBackground from '../components/gridBackground'
import GridText from '../components/gridText'
import GridContainer from '../styles/blocks/GridContainer'
import pageInfo from '../pageInfo'

const Layout = Object.keys(pageInfo).map((elem, i) => {
  if (i % 2 != 0) {
    return (
      <GridContainer container xs={12} sm={12}>
        <GridText key={pageInfo[elem]}>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
        </GridText>
        <GridBackground
          background={pageInfo[elem]['background']}
          title={pageInfo[elem]['title']}
          key={pageInfo[elem]}
        />
      </GridContainer>
    )
  }
  return (
    <GridContainer container xs={12} sm={12}>
      <GridBackground
        background={pageInfo[elem]['background']}
        title={pageInfo[elem]['title']}
        key={pageInfo[elem]}
      />
      <GridText key={pageInfo[elem]} />
    </GridContainer>
  )
})

const Main = () => {
  return (
    <div>
      <Grid container spacing={0}>
        {Layout}
      </Grid>
    </div>
  )
}

export default Main
