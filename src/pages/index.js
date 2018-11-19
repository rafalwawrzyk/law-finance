import React from 'react'
import { Link } from 'gatsby'
import { withPrefix } from 'gatsby'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import bg from '../images/apple-blank-business-442574.jpg'

import Layout from '../components/layout'

const MainPageBg = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${bg});
  background-size: cover;
  position: relative;
`
const StyledButton = styled(Button)`
  && {
    background: #ff6734;
    color: #fff;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size:1rem;
    text-transform:capitalize;
    &:hover {
      background: #fff;
      color:#ff6734;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);    }
  }
`
const MainH1 = styled.h1`
  font-size: 4rem;
  color: #fff;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  display: block;
  text-align: center;
`

const SubHeader = styled(MainH1)`
  font-size: 2rem;
  color: #fff;
  top: 60%;
`

const IndexPage = props => {
  return (
    <Layout>
      <MainPageBg>
        <MainH1>Kancelaria Prawno-Finansowa</MainH1>
        <SubHeader>Beata Murszewska</SubHeader>
        <StyledButton  color="secondary">
          Sprawdź
        </StyledButton>
      </MainPageBg>
    </Layout>
  )
}

export default IndexPage
