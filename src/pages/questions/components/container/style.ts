import styled from 'styled-components';

export const ContainerTitle = styled.h1`
	padding-top: 30px;
	font-size: 1.8em;
	margin: 0px;
`;

export const ContainerContent = styled.div`
	margin: 20px 0px;
`;

export const ContainerButtons = styled.div`
	user-select: none;
	display: flex;
`;

export const SubmitButton = styled.button`
	border-radius: ${(p): string => p.theme.global.radius};
	background: ${(p): string => p.theme.pages.questions.button.background};
	color: white;
	border: none;
	padding: 15px 20px;
    font-size: 1.1em;

	svg {
		margin-left: 3px;
	}

	${(p): string => p.disabled ? `
		opacity: .6;
	` : `
		cursor: pointer;

		&:hover {
			background: ${p.theme.pages.questions.button.hoveredBackground};
		}
	`}
`;

export const SubmitContainer = styled.div`
	flex-grow: 1;
`;

export const NavigationContainer = styled.div`
	button {
		margin-left: 1px;
	}
`;

export const NavigationButton = styled.button`
	border-radius: ${(p): string => p.theme.global.radius};
	background: ${(p): string => p.theme.pages.questions.button.background};
	color: white;
	border: none;
	padding: 15px 20px;
    font-size: 1.1em;

	
	${(p): string => p.disabled ? `
		opacity: .6;
	` : `
		cursor: pointer;

		&:hover {
			background: ${p.theme.pages.questions.button.hoveredBackground};
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