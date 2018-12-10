import styled from 'styled-components'; 
import Title from './Title';


const SquaredBg = styled.div`
    height:400px;
    height:100%;
    background-image:url(${props => props.background});
    background-position:center;
    background-size:cover;
`

SquaredBg.Title = Title;



export default SquaredBg;