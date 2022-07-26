import styled from 'styled-components';

export const DefaultAnswer = styled.button<{ current: boolean; }>`
	border-radius: ${(p): string => p.theme.global.radius};
	background: ${(p): string => p.theme.pages.questions.item.background};
	border: 1px solid ${(p): string => p.theme.pages.questions.item.border};
	padding: 12px;
	cursor: pointer;
	display: block;
	width: 100%;
	text-align: left;
	font-size: 1em;

	${(p): string => p.current ? `
		border: 1px solid ${p.theme.colors.primary};
		background: ${p.theme.colors.primary};
		color: white;
	` : `
		&:hover {
			background: ${p.theme.pages.questions.item.hoveredBackground};
			border: 1px solid  ${p.theme.pages.questions.item.hoveredBorder};
		}
	`}
`;

export const DefaultImg = styled.img`
	border-radius: ${(p): string => p.theme.global.radius};
	width: 100%;
	margin-bottom: 10px;
`;

export const DefaultDescription = styled.div`
	margin-top: 10px;
`;