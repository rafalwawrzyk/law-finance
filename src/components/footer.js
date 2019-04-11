import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
	width: 100%;
	height: 200px;
	margin-top: 10px;
`;

const FooterTitleCotainer = styled.div`
	padding-left: 7%;
  padding-right: 7%;
  font-family: "Karla", "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const FooterTitle = styled.p`
	font-size: 1.5rem;
	letter-spacing: 0.1rem;
	line-height: 2rem;
`;

const Footer = () => {
	return (
		<FooterContainer>
			<FooterTitleCotainer>
				<FooterTitle>Skontatuj się z nami</FooterTitle>
				<ul>
					<li>
						<p>Leśna 1</p>
						<p>87-640 Czernikowo</p>
            <p>54 288 92 22</p>
					</li>
				</ul>
			</FooterTitleCotainer>
		</FooterContainer>
	);
};

export default Footer;
