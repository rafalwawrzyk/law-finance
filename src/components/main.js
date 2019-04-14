import React from 'react';
import styled from 'styled-components';
import Content from './content.js';

export const ContentContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 100%;
`;

const Container = styled.div`
	max-width: 1380px;
	display: flex;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;
	width: 100%;
`;



const Main = () => {
	return (
			<Container>
				<ContentContainer>
					<Content />
				</ContentContainer>
			</Container>
	);
};

export default Main;
