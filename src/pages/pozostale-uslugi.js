import React from 'react';
import Layout from '../components/layout';
import { CiteContainer } from '../components/content';
import { Container } from '../components/content';
import styled from 'styled-components';
import bg from '../images/law-office.jpg';

const ImageBox = styled.div`
	max-width: 800px;
	height: 300px;
	background-image: url(${bg});
	background-size: contain;
`;

const OfferList = styled.div`
	padding-top: 50px;
	ul {
		li {
			font-family: "Karla", "Helvetica Neue", Helvetica, Arial, sans-serif;
			font-size: 1.5rem;
		}
	}
`;

const OtherServices = () => {
	return (
		<Layout>
			<Container>
				<CiteContainer>
					<p>Pomagamy naszym klientom w sprawach księgowych</p>
				</CiteContainer>
				<ImageBox />
				<OfferList>
					<ul>
						<li>rejestracja przedsiębiorstw</li>
						<hr />
						<li>wsparcie prawno-podatkowe przy rejestracji przedsiębiorstwa</li>
						<hr />
						<li>sprawdzanie dokumentów pod względem formalnym i rachunkowym</li>
						<hr />
					</ul>
				</OfferList>
			</Container>
		</Layout>
	);
};

export default OtherServices;
