import styled from 'styled-components';


const TitleBg = styled.h2`
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    position:absolute;
    color:#fff;
    text-transform:uppercase;
    font-size:1.2rem;
    display:block;
    z-index:200;

    &:after{
        content:'';
        display:block;
        background-color:#ff9e36;
        width:100%;
        height:1px;
        position:absolute;
        bottom:-5px;
        
    }
`



export default TitleBg;