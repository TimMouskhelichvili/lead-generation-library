import styled from 'styled-components';

export const Input = styled.input`
	width: 100%;
	border: 1px solid ${(p): string => p.theme.colors.border};
	border-radius: ${(p): string => p.theme.global.radius};
	box-sizing: border-box;
	outline: none;
	padding: 15px;

	&:focus {
		outline: 1px solid ${(p): string => p.theme.colors.color};
	}
`;

export const ErrorField = styled.div`
	color: ${(p): string => p.theme.colors.error};

	&:empty {
		display: none;
	}
`;