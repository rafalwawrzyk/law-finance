import styled from 'styled-components'
import Title from './Title'
import SubTitle from './SubTitle'
import bg from '../../../images/architecture-building-center-27406.jpg'



const Header = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  position: relative;
`


Header.Title = Title;
Header.SubTitle = SubTitle;


export default Header;