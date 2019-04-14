import React from 'react';
import styled from 'styled-components';
import FooterContact from './footerContact'

const FooterContainer = styled.footer`
	width: 100%;
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
      <FooterContact/>
      </FooterContactContainer>
      {/* <DesignedBy>Raał</DesignedBy> */}
		</FooterContainer>
	);
};

export default Footer;
