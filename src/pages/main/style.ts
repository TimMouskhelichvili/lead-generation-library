import styled from 'styled-components';

export const MainContainer = styled.div`
	text-align: center;
	position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1em;
    padding-right: 1em;
    max-width: 1200px;
`;

export const MainH1 = styled.h1`
	padding-top: 20px;
	font-size: 2em;
	margin: 0px;
`;

export const MainDescription = styled.div`
	width: 70%;
	margin: 20px auto;
`;

export const MainImageContainer = styled.div`
	width: 80%;
	margin: 0px auto;
	margin-top: 20px;
    padding-top: 30%;
	position: relative;
	border: 1px solid ${(p): string => p.theme.colors.border};
	border-radius: ${(p): string => p.theme.global.radius};
`;

export const MainImage = styled.img`
	position: absolute;
	left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
	object-fit: cover;
	border-radius: ${(p): string => p.theme.global.radius};
`;

export const MainButton = styled.button`
	border: 0px;
	background: ${(p): string => p.theme.colors.primary};
	padding: 10px 25px;
	color: white;
	border-radius: ${(p): string => p.theme.global.radius};
	font-size: 1.1em;
	cursor: pointer;
`;