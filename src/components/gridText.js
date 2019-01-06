import React from 'react';
import Grid from '@material-ui/core/Grid';
import SquaredText from '../styles/blocks/SquaredText';

const GridText = (props) => {
	return (
		<Grid item xs={12} sm={6} style={{ height: '400px', padding: 0 }}>
			<SquaredText>
				<SquaredText.TextList>
					{props.children}
				</SquaredText.TextList>
			</SquaredText>
		</Grid>
	);
};

export default GridText;
