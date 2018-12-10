import styled from 'styled-components';
import TextList from './TextList';

const SquaredText = styled.div`
	height: 80%;
	width: 80%;
	padding: 50px;
	position: relative;
	margin: 0 auto;
	top: 50%;
    transform: translateY(-50%);
    display:flex;
    align-items:center;
`;


SquaredText.TextList = TextList;

export default SquaredText;
