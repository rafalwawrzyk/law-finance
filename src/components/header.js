import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logoImg from '../images/extra-bg.png';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import assets from '../assets/variables';


const {orange,main} = assets.colors;


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
    color:${main};
    padding-top:150px;
    font-family: "Karla", "Helvetica Neue", Helvetica, Arial, sans-serif;
    a{
	  text-decoration:none;
	  display:block;
	  width:100%;
		height:100%;
		color:${main};
		&:hover{
			color:${orange};
		}
    }
    li{
      color:${main};
    font-size: 2rem;
    line-height: 35px;
		padding: 5px;
		display:block;
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
	&:hover{
		cursor:pointer;
	}

`;

const Logo = styled.div`
	height: 100%;
	display: ${(props) => (props.view ? 'none' : 'block')};
	user-select: none;
	img {
		height: 100%;
		width: auto;
	}
	a {
		text-decoration: none;
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
							<li>
								<Link to="/outsourcing-ksiegowy">Outsourcing usług księgowych</Link>
							</li>

							<li>
								<Link to="/outsorcing-kadrowo-placowy">Outsourcing kadrowo-płacowy </Link>
							</li>

							<li>
								<Link to="/doradztwo-prawne-podatkowe">Doradztwo prawno-podatkowe</Link>
							</li>

							<li>
								<Link to="/pozostale-uslugi">Pozostałe usługi</Link>
							</li>

							<li>
								<Link to="/kontakt">Kontakt</Link>
							</li>
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
					<Logo view={scrolled}>
						<Link to="/">
							<img src={logoImg} />
						</Link>
					</Logo>
				</HeaderMenuContent>
			</HeaderContainer>
		);
	}
}

export default Header;
