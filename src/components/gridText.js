import React from 'react';
import Grid from '@material-ui/core/Grid';
import SquaredText from '../styles/blocks/SquaredText';

const GridBackground = () => {
	return (
		<Grid item xs={12} sm={6} style={{ height: '400px', padding: 0 }}>
			<SquaredText>
				<SquaredText.TextList>
					<li>Lorem ipsum</li>
					<li>Lorem ipsum</li>
					<li>Lorem ipsum</li>
				</SquaredText.TextList>
			</SquaredText>
		</Grid>
	);
};

export default GridBackground;
