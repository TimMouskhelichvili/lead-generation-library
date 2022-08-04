import { sizes } from 'src/theme';
import styled from 'styled-components';

export const AnswersContainer = styled.div`

`;

export const AnswersTitle = styled.h1`
	text-align: center;
	padding-top: 30px;
	font-size: 2em;
	margin: 0px;

	@media screen and (max-width: ${sizes.smallTablet}) {
		font-size: 1.6em;
	}
`;