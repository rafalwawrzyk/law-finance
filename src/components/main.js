import React from 'react';
import styled from 'styled-components';
import Content from './content.js';
import Footer from './footer';
import Layout from './layout';

export const ContentContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 100%;
`;

const Section = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  background:color:red;
	width:100%;
	flex-direction:column;
	@media(min-width:650px){
		flex-direction: row;
	}
`;

const BgContainer = styled.div`
	height: 400px;
	width: 100%;
	flex-basis: 100%;
	background-color: red;
	position: relative;
`;

// const Footer = styled.div`
// 	height: 400px;
// 	width: 100%;
// 	background-color: black;
// 	color: white;
// 	display: flex;
// 	align-items: center;
// 	ul {
// 		height: 250px;
// 		list-style-type: none;
// 	}
// `;

const List = styled.ul`
	position: absolute;
	left: 20px;
	top: 50%;
	transform: translate(0%, -50%);
	font-size: 0.9rem;
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
		<Layout>
			<Container>
				<ContentContainer>
					<Content />
					<Footer />
				</ContentContainer>
			</Container>
		</Layout>
	);
};

export default Main;
