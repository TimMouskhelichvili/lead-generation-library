import styled from 'styled-components';

export const ScoreContainer = styled.div`

`;

export const ResultsScore = styled.div`
	font-weight: bold;
	font-size: 5em;
	margin: 0px;
	margin-bottom: 20px;

	span {
		border-radius: ${(p): string => p.theme.global.radius};
		border: 8px solid ${(p): string => p.theme.colors.color};
		padding: 0px 30px;
	}
`;