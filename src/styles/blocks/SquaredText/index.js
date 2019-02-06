import styled from 'styled-components';
import TextList from './TextList';

const SquaredText = styled.div`
	flex-basis: 100%;
	min-height:400px;
	width:100%;
	position:relative;
`;


SquaredText.TextList = TextList;

export default SquaredText;
