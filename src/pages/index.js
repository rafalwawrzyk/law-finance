import React from 'react'
import { Link } from 'gatsby'
import { withPrefix } from 'gatsby'
import styled from 'styled-components'
import Header from '../styles/blocks/Banner'
import HeaderButton from '../styles/elements/Button'
import Layout from '../components/layout'


const IndexPage = props => {
  return (
    <Layout>
      <Header>
        <Header.Title>Kancelaria Prawno-Finansowa</Header.Title>
        <Header.SubTitle>Beata Murszewska</Header.SubTitle>
        <HeaderButton  color="secondary">
          Sprawdź
        </HeaderButton>
      </Header>
    </Layout>
  )
}

export default IndexPage
