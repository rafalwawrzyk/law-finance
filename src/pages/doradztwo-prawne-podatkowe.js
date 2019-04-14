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

const TaxConsultancy = () => {
	return (
		<Layout>
			<Container>
				<CiteContainer>
					<p>Doradzamy w sprawach prawno-podatkowych</p>
				</CiteContainer>
				<ImageBox />
				<OfferList>
					<ul>
						<li>rozwiązywanie problemów podatkowych</li>
						<hr />
						<li>optymalizacja podatkowa</li>
						<hr />
						<li>konsultacje związane z wdrożeniem najlepszych rozwiązań</li>
						<hr />
						<li>interpretacja zdarzeń gospodarczych w firmie Klienta pod kątem podatkowym</li>
						<hr />
					</ul>
				</OfferList>
			</Container>
		</Layout>
	);
};

export default TaxConsultancy;
