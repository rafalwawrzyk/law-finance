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
        <GridText key={pageInfo[elem]} />
        <GridBackground
          background={pageInfo[elem]['background']}
          title={pageInfo[elem]['title']}
          key={pageInfo[elem]}
        />
      </>
    )
  }
  return (
    <>
      <GridBackground
        background={pageInfo[elem]['background']}
        title={pageInfo[elem]['title']}
        key={pageInfo[elem]}
      />
      <GridText key={pageInfo[elem]} />
    </>
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
