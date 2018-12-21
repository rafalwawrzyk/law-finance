import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 10px;
`

const Footer = () => {
  return (
    <>
      <FooterContainer>
      <Grid container spacing={0} style={{height:'100%'}}>
        <Grid item xs={12} sm={4} style={{ height: '100%', padding: 0, width:'100%' }}>
          <ul style={{textAlign:'center', listStyleType:'none'}}>
            <li>First</li>
            <li>Second</li>
            <li>Thirds</li>
          </ul>      
        </Grid>
        <Grid item xs={12} sm={4} style={{ height: '100%', padding: 0, width:'100%' }}>
        <ul style={{textAlign:'center', listStyleType:'none'}}>
            <li>First</li>
            <li>Second</li>
            <li>Thirds</li>
          </ul>           
        </Grid>
        <Grid item xs={12} sm={4} style={{ height: '100%', padding: 0, width:'100%' }}>
        <ul style={{textAlign:'center', listStyleType:'none'}}>
            <li>First</li>
            <li>Second</li>
            <li>Thirds</li>
          </ul>           
        </Grid>
    </Grid>
      </FooterContainer>
    </>
  )
}

export default Footer
