import React from 'react';
import Grid from '@material-ui/core/Grid';
import SquaredBg from '../styles/blocks/SquareBlockBg';
import img from '../images/art-black-and-white-blank-256433.jpg';

const GridBackground = (props) => {
	return (
		<Grid item xs={12} sm={6} style={{ height: '400px', padding: 0,position:'relative' }}>
			<SquaredBg background={props.background}>
			</SquaredBg>
			<SquaredBg.Title>{props.title}</SquaredBg.Title>
		</Grid>
	);
};

export default GridBackground;