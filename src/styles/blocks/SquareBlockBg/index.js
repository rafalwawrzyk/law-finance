import styled from 'styled-components'; 
import Title from './Title';


const SquaredBg = styled.div`
    height:400px;
    background-image:url(${props => props.background});
    background-position:center;
    background-size:cover;
    filter: brightness(15%);
    background-color:red
`

SquaredBg.Title = Title;



export default SquaredBg;