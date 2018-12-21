import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../images/architecture-building-center-27406.jpg'
import Menu from '../components/menu'

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      open:false
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle(){
    this.setState({open:!this.state.open})
  }

  handleClose(){
    this.setState({open: false})
  }

  render(){
    const {siteTitle} = this.props;

    return(
      <div
    style={{
      background: 'white',
    }}
  >
    <Menu handleToggle={this.handleToggle} handleClose={this.handleClose} open={this.state.open}/>     
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960
      }}
    >
    {/* <img src={logo} alt="someimg"/>  */}
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
    )
    
  }
  
}

export default Header
