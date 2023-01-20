import styled from 'styled-components';
import { sizes } from 'src/theme';

export const AnswersContainer = styled.div`

`;

export const AnswersTitle = styled.h1`
	text-align: center;
	font-size: 2em;
	margin: 0px;

	@media screen and (max-width: ${sizes.smallTablet}) {
		font-size: 1.6em;
	}
`;

export const AnswersResultsContainer = styled.div`
	margin-top: 20px;
	margin-bottom: 20px;
`;

export const AnswersGoBack = styled.div`
	position: sticky;
	bottom: 0;
    left: 0;
    padding-bottom: 1em;
	text-align: center;
`;

export const AnswersGoBackButton = styled.button`
	border: 0px;
	background: ${(p): string => p.theme.colors.primary};
	padding: 15px 30px;
	color: white;
	border-radius: ${(p): string => p.theme.global.radius};
	font-size: 1.3em;
	cursor: pointer;
	user-select: none;
	position: sticky;

	&:hover {
		background: ${(p): string => p.theme.colors.primaryDarken};
	}
`;