import React from 'react';
import Grid from '@material-ui/core/Grid';
import SquaredBg from '../styles/blocks/SquareBlockBg';
import img from '../images/art-black-and-white-blank-256433.jpg';

const GridBackground = (props) => {
	return (
		<Grid item xs={12} sm={6} style={{ height: '400px', padding: 0 }}>
			<SquaredBg background={props.background}>
				<SquaredBg.Title>Title</SquaredBg.Title>
			</SquaredBg>
		</Grid>
	);
};

export default GridBackground;