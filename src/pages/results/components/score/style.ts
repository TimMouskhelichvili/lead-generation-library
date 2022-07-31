import styled from 'styled-components';

export const ScoreContainer = styled.div`
	border-radius: ${(p): string => p.theme.global.radius};
	background: ${(p): string => p.theme.colors.border};
	display: inline-block;
	margin-top: 20px;
`;

export const ScoreContent = styled.div`
	margin: 20px 20px;
`;

export const ScoreAnswers = styled.div`
	margin-top: 5px;
`;

export const ScoreTitle = styled.span`
	padding: 0px 20px;
	font-weight: bold;
	font-size: 60px;
	line-height: 60px;
`;