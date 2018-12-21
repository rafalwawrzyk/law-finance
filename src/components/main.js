import React from 'react'
import Grid from '@material-ui/core/Grid'
import GridBackground from '../components/gridBackground'
import GridText from '../components/gridText'
import pageInfo from '../pageInfo'

const Layout = Object.keys(pageInfo).map((elem, i) => {
  console.log(elem)
  if (i % 2 != 0) {
    return (
      <>
        <GridText />
        <GridBackground
          background={pageInfo[elem]['background']}
          title={pageInfo[elem]['title']}
        />
      </>
    )
  }
  return (
    <>
      <GridBackground
        background={pageInfo[elem]['background']}
        title={pageInfo[elem]['title']}
      />
      <GridText />
    </>
  )
})

const Main = () => {
  return (
    <div>
      <Grid container spacing={8}>
        {Layout}
      </Grid>
    </div>
  )
}

export default Main
