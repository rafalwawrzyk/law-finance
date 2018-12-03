import React from 'react';
import { Link } from 'gatsby';
import { withPrefix } from 'gatsby';
import styled from 'styled-components';
import Header from '../styles/blocks/Banner';
import HeaderButton from '../styles/elements/Button';
import Layout from '../components/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createGlobalStyle } from 'styled-components';
import ArrowIcon from '../styles/elements/DownIcon'

const GlobalStyle = createGlobalStyle`
  body{
    padding-right:0 !important;
    overflow:hidden;
  }
`;

const IndexPage = (props) => {
	return (
		<Layout>
			<GlobalStyle />
			<Header>
				<Header.Title>Kancelaria Prawno-Finansowa</Header.Title>
				<Header.SubTitle>Beata Murszewska</Header.SubTitle>
				<HeaderButton color="secondary">Sprawdź</HeaderButton>
        <ArrowIcon>
          <FontAwesomeIcon icon="angle-double-down" />
        </ArrowIcon>
			</Header>
			
		</Layout>
	);
};

export default IndexPage;
