import { sizes } from 'src/theme';
import styled from 'styled-components';

export const ResultsContainer = styled.div`
	text-align: center;
`;

export const ResultsTitle = styled.h1`
	padding-top: 30px;
	font-size: 2em;
	margin: 0px;

	@media screen and (max-width: ${sizes.smallTablet}) {
		font-size: 1.6em;
	}
`;

export const ResultsButton = styled.button`
	border: 0px;
	background: ${(p): string => p.theme.colors.primary};
	padding: 15px 30px;
	color: white;
	border-radius: ${(p): string => p.theme.global.radius};
	font-size: 1.3em;
	cursor: pointer;
	user-select: none;

	&:hover {
		background: ${(p): string => p.theme.colors.primaryDarken};
	}
`;