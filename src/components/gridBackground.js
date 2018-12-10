import React from 'react';
import Grid from '@material-ui/core/Grid';
import SquaredBg from '../styles/blocks/SquareBlockBg';

const GridBackground = () => {
	return (
		<Grid item xs={12} sm={6} style={{ height: '400px', padding: 0 }}>
			<SquaredBg>
				<SquaredBg.Title>Title</SquaredBg.Title>
			</SquaredBg>
		</Grid>
	);
};

export default GridBackground;