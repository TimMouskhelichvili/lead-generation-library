import styled from 'styled-components';

export const DefaultAnswer = styled.button<{ current: boolean; }>`
	border-radius: ${(p): string => p.theme.global.radius};
	background: ${(p): string => p.theme.pages.questions.item.background};
	padding: 12px;
	margin-bottom: 10px;
	border: none;
	cursor: pointer;
	display: block;
	width: 100%;
	text-align: left;
	font-size: 1em;

	${(p): string => p.current ? `
		background: ${p.theme.colors.primary};
		color: white;
	` : `
		&:hover {
			background: ${p.theme.pages.questions.item.hoveredBackground};
		}
	`}
`;