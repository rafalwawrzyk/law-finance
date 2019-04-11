import React from 'react';
import styled from 'styled-components';
import bg from '../images/apple-blank-business-442574.jpg';
import bg2 from '../images/art-black-and-white-blank-256433.jpg';
import bg3 from '../images/carpet-contemporary-daylight-1098982.jpg';
import bg4 from '../images/black-and-white-blur-desk-910332.jpg';


const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding-left: 7%;
	padding-right: 7%;
`;

const CiteContainer = styled.div`
	max-width: 400px;
	padding-top: 100px;

	p {
		font-family: "Karla", "Helvetica Neue", Helvetica, Arial, sans-serif;
		font-size: 1.5rem;
		letter-spacing: 0.1rem;
		line-height: 2rem;
	}
`;

const SectionContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding-top: 30px;
`;

const SectionElem = styled.div`
	width: 100%;
	background-color: ${(props) => props.backgroundColor};
	margin-left: auto;
	margin-right: auto;
	position: relative;
	&::after {
		content: "";
		display: block;
		padding-bottom: 80%;
	}
`;

const SectionElemBg = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-image: url(${(props) => props.backgroundImage});
	background-size: cover;
	filter: brightness(60%);
	z-index: 1;
`;

const SectionElemTitle = styled.div`
	position: absolute;
	top: 30px;
	left: 40px;
	color: #fff;
	z-index: 2;
	p {
		margin: 0;
		padding: 0;
	}
	p:nth-child(even) {
		font-size: 1.3rem;
		font-weight: 600;
		letter-spacing: 0.2rem;
	}
`;

const Content = () => {
	return (
		<Container>
			<CiteContainer>
				<p>Did you hear that? They've shut down. </p>
			</CiteContainer>
			<SectionContainer>
				<SectionElem backgroundColor="red">
					<SectionElemTitle>
						<p>Oferta</p>
						<p>Outsourcing usług księgowych</p>
					</SectionElemTitle>
					<SectionElemBg backgroundImage={bg} />
				</SectionElem>
				<SectionElem backgroundColor="green">
					<SectionElemBg backgroundImage={bg2} />
					<SectionElemTitle>
						<p>Oferta</p>
						<p>Outsourcing kadrowo-płacowy</p>
					</SectionElemTitle>
				</SectionElem>
                <SectionElem backgroundColor="green">
					<SectionElemBg backgroundImage={bg3} />
					<SectionElemTitle>
						<p>Oferta</p>
						<p>Doradztwo prawno-podatkowe</p>
					</SectionElemTitle>
				</SectionElem>
                <SectionElem backgroundColor="green">
					<SectionElemBg backgroundImage={bg4} />
					<SectionElemTitle>
						<p>Oferta</p>
						<p>Pozostałe usługi</p>
					</SectionElemTitle>
				</SectionElem>
			</SectionContainer>
		</Container>
	);
};

export default Content;
