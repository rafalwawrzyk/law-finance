import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
	width: 100%;
	height: 200px;
  margin-top: 10px;
  padding-left: 7%;
  padding-right: 7%;
`;

const FooterTitleCotainer = styled.div`

  font-family: "Karla", "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const FooterTitle = styled.p`
	font-size: 1.5rem;
	letter-spacing: 0.1rem;
  line-height: 2rem;
  color:#f8ba8e;
`;

const FooterContactContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`

const FooterContactInfo = styled.ul`
  margin-left:auto;
  margin-right:auto;
  display:block;
  list-style-type:none;
  margin-bottom:20px;
  li{
    text-align:center;
  }
`

const DesignedBy = styled.div`
  width:100%;
  height:50px;
  background-color:#484747;
`

const Footer = () => {
	return (
		<FooterContainer>
			<FooterTitleCotainer>
				<FooterTitle>Skontatuj się z nami</FooterTitle>
			</FooterTitleCotainer>
      <FooterContactContainer>
      <FooterContactInfo>
					<li>
						<p>Leśna 1</p>
						<p>87-640 Czernikowo</p>
            <p>54 288 92 22</p>
            <p>kancelaria@kpfczernikowo.eu</p>
            <p>czynne: poniedziałek-piątek 8:00 - 17:00</p>
					</li>
				</FooterContactInfo>
      </FooterContactContainer>
      <DesignedBy>Raał</DesignedBy>
		</FooterContainer>
	);
};

export default Footer;
