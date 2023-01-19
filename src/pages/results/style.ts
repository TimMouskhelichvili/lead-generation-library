import { sizes } from 'src/theme';
import styled from 'styled-components';

export const ResultsContainer = styled.div`
	text-align: center;
`;

export const ResultsTitle = styled.h1`
	font-size: 2em;
	margin: 0px;

	@media screen and (max-width: ${sizes.smallTablet}) {
		font-size: 1.6em;
	}
`;

export const ResultsButton = styled.button`
	margin-top: 20px;
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

export const ResultsDescription = styled.div`
	width: 80%;
	margin: 0px auto;
	margin-top: 20px;
	font-size: 1em;
    line-height: 26px;

	@media screen and (max-width: ${sizes.smallTablet}) {
		width: calc(100% - 1em);
		padding: 0px .5em;
	}
`;