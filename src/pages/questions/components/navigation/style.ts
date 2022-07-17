import styled from 'styled-components';

export const NavigationContainer = styled.div`
	button {
		margin-left: 2px;
	}
`;

export const NavigationButton = styled.button`
	border-radius: ${(p): string => p.theme.global.radius};
	background:  ${(p): string => p.theme.pages.questions.navigation.background};
	border:none;
	padding: 15px 20px;
    font-size: 1.1em;

	
	${(p): string => p.disabled ? `
		opacity: .6;
	` : `
		cursor: pointer;

		&:hover {
			background: ${p.theme.pages.questions.navigation.hoveredBackground};
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