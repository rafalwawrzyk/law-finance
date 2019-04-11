import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logoImg from '../images/extra-bg.png';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

const HeaderContainer = styled.div`
	width: 100%;
	padding-top: 20px;
	position: fixed;
`;

const Menu = styled.div`
  position:fixed;
  width:100%;
  height:100%;
  top:0;
  left:0;
  background-color:black;
  ul{
    list-style-type:none;
    padding-top:
    color:#fff;
    padding-top:150px;
    font-family: "Karla", "Helvetica Neue", Helvetica, Arial, sans-serif;
    a{
      text-decoration:none;
    }
    li{
      color:#fff;
    font-size: 2rem;
    line-height: 35px;
    padding: 5px;
    }
  }
`;

const HeaderMenuContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	height: 100px;
`;
const Hamburger = styled.div`
	border-radius: 50%;
	background-color: ${(props) => (props.hamburgerColor ? 'none' : '#ccc')};
	width: 30px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
	color: ${(props) => (props.hamburgerColor ? 'white' : 'black')};
`;

const Logo = styled.div`
	height: 100%;
	display: ${(props) => (props.view ? 'none' : 'block')};
	img {
		height: 100%;
		width: auto;
	}
`;

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			scrolled: false
		};
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll(e) {
		if (window.pageYOffset > 5) {
			this.setState({
				scrolled: true
			});
		} else {
			this.setState({
				scrolled: false
			});
		}
	}

	render() {
		const { siteTitle } = this.props;
		const { open, scrolled } = this.state;

		return (
			<HeaderContainer>
				{open ? (
					<Menu>
						<ul>
							<Link to="/outsourcing-ksiegowy">
								<li>Outsourcing usług księgowych</li>
							</Link>
							<Link to="/outsorcing-kadrowo-placowy">
								<li>Outsourcing kadrowo-płacowy</li>
							</Link>
							<Link to="/doradztwo-prawne-podatkowe">
								<li>Doradztwo prawno-podatkowe</li>
							</Link>
							<Link to="/pozostale-uslugi">
								<li>Pozostałe usługi</li>
							</Link>
							<li>Kontakt</li>
						</ul>
					</Menu>
				) : null}

				<HeaderMenuContent>
					<Hamburger
						hamburgerColor={open}
						onClick={() =>
							this.setState({
								open: !open
							})}
					>
						{open ? <FaTimes /> : <FaBars />}
					</Hamburger>
					<Link to="/">
						<Logo view={scrolled}>
							<img src={logoImg} />
						</Logo>
					</Link>
				</HeaderMenuContent>
			</HeaderContainer>
		);
	}
}

export default Header;
