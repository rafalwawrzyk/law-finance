import React from 'react';
import SquaredBg from '../styles/blocks/SquareBlockBg';
import bg1 from '../images/architecture-building-center-27406.jpg';
import SquaredText from '../styles/blocks/SquaredText';
import styled from 'styled-components';

const ContentContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

const Section = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  background:color:red;
	// height:400px;
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

const Footer = styled.div`
	height: 400px;
	width: 100%;
	background-color: black;
	color: white;
	display: flex;
	align-items: center;
	ul {
		height: 250px;
		list-style-type: none;
	}
`;

const List = styled.ul`
	position: absolute;
	left: 20px;
	top: 50%;
	transform: translate(0%, -50%);
	font-size: 0.9rem;
`;

const Main = () => {
	return (
		<ContentContainer>
			<Section>
				<BgContainer>
					<SquaredBg.Title>Kim jesteśmy</SquaredBg.Title>
					<SquaredBg background={bg1} />
				</BgContainer>
				<SquaredText>
					<List>
						<li>
							ponad dziesięcioletnie doświadczenie w obsłudze księgowej, kadrowej i prawniczej podmiotów
							gospodarczych
						</li>
						<li>konkurencyjne ceny dostosowane do zakresu świadczonych usług</li>
						<li>zapewnienie obsługi prawnej we wszystkich dziedzinach prawa</li>
					</List>
				</SquaredText>
			</Section>
			<Section>
				<SquaredText>
					<List>
						<li>kompleksowa obsługa księgowa, kadrowa i prawnicza firm</li>
						<li>pomoc w założeniu firmy i zdobyciu środków na rozpoczęcie działalności</li>
						<li>rozliczenie VAT w rolnictwie</li>
						<li>doradztwo prawne dla klientów indywidualnych</li>
						<li>
							sporządzania umów, pozwów, pism procesowych, opinii prawnych,odwołań od decyzji
							administracyjnych, konsultacji indywidualnych
						</li>
						<li>
							pomoc w zdobyciu i rozliczeniu funduszy z Unii Europejskiej, w tym bezpłatne konsultacje i
							doradztwo dotyczące wniosków z Osi IV Leader
						</li>
					</List>
				</SquaredText>
				<BgContainer>
					<SquaredBg.Title>Czym się zajmujemy</SquaredBg.Title>
					<SquaredBg background={bg1} />
				</BgContainer>
			</Section>
			<Section>
				<BgContainer>
					<SquaredBg.Title>Dlaczego my?</SquaredBg.Title>
					<SquaredBg background={bg1} />
				</BgContainer>
				<SquaredText>
					<List>
						<li>
							ponad dziesięcioletnie doświadczenie w obsłudze księgowej, kadrowej i prawniczej podmiotów
							gospodarczych
						</li>
						<li>oferta dostosowana do potrzeb i oczekiwań klienta</li>
						<li>nowoczesny obiekt biurowy wyposażony w najnowsze urządzenia techniczne</li>
						<li>Możliwość dostarczania dokumentów księgowych pocztą, kurierem</li>
						<li>Fachowa i kompetentna kadra pracownicza</li>
						<li>Konkurencyjne ceny dostosowane do zakresu świadczonych usług</li>
						<li>
							Pozyskane i rozliczone dla klientów dofinansowania z UE na kwotę przekraczającą 5 mln zł
						</li>
					</List>
				</SquaredText>
			</Section>
			<Footer>
				<ul>
					<li>ul. Leśna 1A</li>
					<li>87-640 Czernikowo</li>
					<li>text motto</li>
				</ul>
				<ul>
					<li>tel./fax 54 288 92 22</li>
					<li>kom. 502 505 828</li>
					<li>e-mail: kancelaria@kpfczernikowo.eu</li>
				</ul>
				<ul>
				<li>Godziny otwarcia:</li>
				<li>poniedziałek-piątek: 8:00 - 17:00</li>
				</ul>
			</Footer>
		</ContentContainer>
	);
};

export default Main;
