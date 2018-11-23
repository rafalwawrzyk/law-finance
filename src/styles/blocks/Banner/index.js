import styled from 'styled-components'
import Title from './Title'
import SubTitle from './SubTitle'
import bg from '../../../images/apple-blank-business-442574.jpg'



const Header = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${bg});
  background-size: cover;
  position: relative;
`


Header.Title = Title;
Header.SubTitle = SubTitle;


export default Header;