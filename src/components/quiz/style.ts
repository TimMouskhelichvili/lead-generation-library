import styled from 'styled-components';

export const QuizContainer = styled.div`
	width: 100%;
	height: 100%;
	font-size: 16px;
	font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
    font-weight: 400;
	letter-spacing: 0px;
	color: ${(p): string => p.theme.colors.color};
	background: ${(p): string => p.theme.colors.background};
`;

export const QuizRow = styled.div`
	position: relative;
	margin-left: auto;
	margin-right: auto;
	padding-left: 1em;
	padding-right: 1em;
	max-width: 800px;
`;