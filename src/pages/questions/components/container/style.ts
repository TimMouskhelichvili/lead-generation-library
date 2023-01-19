import styled from 'styled-components';

export const ContainerTitle = styled.h1`
	font-size: 1.8em;
	margin: 0px;
`;

export const ContainerContent = styled.div<{ columns: number; }>`
	margin: 20px 0px;
	display: grid;
	grid-template-columns: ${(p): string => '1fr '.repeat(p.columns).trim()};
	gap: 10px;
`;

export const ContainerExplanation = styled.div`
	padding-top: 10px;
	font-style: italic;
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

export const ContainerDescription = styled.div`
	margin-top: 10px;
`;

export const ContainerError = styled.div`
	color: ${(p): string => p.theme.colors.error};
	margin-top: 10px;

	&:empty {
		display: none;
	}
`;