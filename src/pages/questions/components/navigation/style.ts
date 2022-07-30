import styled from 'styled-components';

export const NavigationContainer = styled.div`
	button {
		margin-left: 2px;
	}
`;

export const NavigationButton = styled.button`
	color:  ${(p): string => p.theme.pages.questions.navigation.color};
	border-radius: ${(p): string => p.theme.global.radius};
	background:  ${(p): string => p.theme.pages.questions.navigation.background};
	border: 1px solid ${(p): string => p.theme.pages.questions.navigation.border};
	padding: 15px 20px;
    font-size: 1.1em;

	
	${(p): string => p.disabled ? `
		opacity: .6;
	` : `
		cursor: pointer;

		&:hover {
			background: ${p.theme.pages.questions.navigation.hoveredBackground};
			border: 1px solid ${p.theme.pages.questions.navigation.hoveredBorder};
		}
	`}

	&:first-of-type {
		border-top-right-radius: 0px;
		border-bottom-right-radius: 0px;
	}

	&:last-of-type {
		border-top-left-radius: 0px;
		border-bottom-left-radius: 0px;
	}
`;