import React, { Component } from 'react';
import styled from 'styled-components';



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

class FooterContact extends Component {
    constructor(props){
        super(props);
        this.contactSection = React.createRef();

    }
	render() {
		return (
			<div>
				<FooterContactInfo ref = {this.contactSection}>
					<li>
						<p>Leśna 1A</p>
						<p>87-640 Czernikowo</p>
						<p>54 288 92 22</p>
						<p>kancelaria@kpfczernikowo.eu</p>
						<p>czynne: poniedziałek-piątek 8:00 - 17:00</p>
					</li>
				</FooterContactInfo>
			</div>
		);
	}
}

export default FooterContact;
