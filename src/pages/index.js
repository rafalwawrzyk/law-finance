import React from 'react';
import { Link } from 'gatsby';
import Header from '../styles/blocks/Banner';
import Layout from '../components/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createGlobalStyle } from 'styled-components';
import ArrowIcon from '../styles/elements/DownIcon';
import Main from '../components/main';
// import Footer from '../components/Footer'

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
			<Main />
		</Layout>
	);
};

export default IndexPage;
