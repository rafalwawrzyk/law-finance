import React from 'react';
import Grid from '@material-ui/core/Grid';
import GridBackground from '../components/gridBackground'
import GridText from '../components/gridText';
import pageInfo from '../pageInfo';

const arraySample = [1,2,3,4]

const Layout = arraySample.map((elem,i) => {
  if(i % 2 != 0){
    return (
      <>
        <GridText />
        <GridBackground background ={pageInfo.backgrounds[i]}/>
      </>
    )
  }
    return (
      <>
        <GridBackground background ={pageInfo.backgrounds[i]}/>
        <GridText/>
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
	);
};

export default Main;
