import React from 'react';
import Grid from '@material-ui/core/Grid';
import SquaredBg from '../styles/blocks/SquareBlockBg';
import SquaredText from '../styles/blocks/SquaredText';
import GridBackground from '../components/gridBackground'
import GridText from '../components/gridText';

const arraySample = [1,2,3,4]

const Layout = arraySample.map((elem,i) => {
  if(i % 2 === 0){
    return (
      <>
        <GridText/>
        <GridBackground/>
      </>
    )
  }else{
    return (
      <>
        <GridBackground/>
        <GridText/>
      </>
    )
  }
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
