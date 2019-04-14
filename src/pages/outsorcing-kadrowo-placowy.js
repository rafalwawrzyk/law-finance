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

const StaffOutsorcing = () => {
	return (
		<Layout>
			<Container>
				<CiteContainer>
					<p>Zajmujemy się sprawami z zakresu kadrowo-płacowego</p>
				</CiteContainer>
				<ImageBox />
				<OfferList>
					<ul>
						<li>ewidencja danych kadrowych w systemach kadrowo-płacowych</li>
						<hr />
						<li>sporządzanie listy płac</li>
						<hr />
						<li>naliczanie wynagrodzeń</li>
						<hr />
						<li>obsługa procesu zatrudnienia pracownika</li>
						<hr />
						<li>zgłaszanie pracowników do ZUS</li>
						<hr />
						<li>kalkulacja zobowiązań publicznoprawnych związanych z wynagrodzeniami</li>
						<hr />
						<li>deklaracje ZUS i PFRON</li>
						<hr />
						<li>wystawianie zaświadczeń o wynagrodzeniach, zarobkach, świadectw pracy</li>
						<hr />
						<li>sporządzanie PIT 11, PIT 40, PIT 4R, PIT 8AR, ZUS IWA</li>
						<hr />
						<li>prowadzenie i administrowanie teczek osobowych pracowników</li>
						<hr />
						<li>monitorowanie ważności badań lekarskich i szkoleń BHP</li>
						<hr />
						<li>prowadzenie ewidencji urlopowej</li>
						<hr />
						<li>reprezentowanie Klienta w kontrolach organów państwowych</li>
						<hr />
						<li>raportowanie zgodnie z wymaganiami Klienta</li>
						<hr />
					</ul>
				</OfferList>
			</Container>
		</Layout>
	);
};

export default StaffOutsorcing;
