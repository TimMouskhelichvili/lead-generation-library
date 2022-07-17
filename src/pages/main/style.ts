import styled from 'styled-components';
import { sizes } from 'src/theme';

export const MainContainer = styled.div`
	text-align: center;
`;

export const MainH1 = styled.h1`
	padding-top: 30px;
	font-size: 2em;
	margin: 0px;

	@media screen and (max-width: ${sizes.smallTablet}) {
		font-size: 1.6em;
	}
`;

export const MainDescription = styled.div`
	width: 80%;
	margin: 20px auto;
	font-size: 1em;
    line-height: 26px;

	@media screen and (max-width: ${sizes.smallTablet}) {
		width: calc(100% - 1em);
		padding: 0px .5em;
	}
`;

export const MainImageContainer = styled.div`
	width: 100%;
	height: 250px;
	margin: 0px auto;
	margin-top: 30px;
	border: 1px solid ${(p): string => p.theme.colors.border};
	border-radius: ${(p): string => p.theme.global.radius};

	@media screen and (max-width: ${sizes.smallTablet}) {
		margin-top: 20px;
	}
`;

export const MainImage = styled.img`
    width: 100%;
    height: 100%;
	object-fit: cover;
	border-radius: ${(p): string => p.theme.global.radius};
`;

export const MainButton = styled.button`
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