import styled from 'styled-components'
import Title from './Title'
import SubTitle from './SubTitle'
import Background from './Background'



const Header = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`


Header.Title = Title;
Header.SubTitle = SubTitle;
Header.Background = Background;

export default Header;