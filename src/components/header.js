import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'



const HeaderContainer = styled.div`
    width:100%;
    background-color:red;
    padding-top:20px;
`

const HeaderMenuContent = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px;
`
const Hamburger = styled.div`
    border-radius:50%;
    border:1px solid black;
    width:20px;
    height:20px;
    display:flex;
    justify-content:center;
    align-items:center;
`



class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      open:false
    }
    
  }




  render(){
    const {siteTitle} = this.props;

    return(
      <HeaderContainer>
          <HeaderMenuContent>
              <Hamburger>≡</Hamburger>
              <div>Logo</div>
          </HeaderMenuContent>
      </HeaderContainer>
    )
    
  }
  
}

export default Header
