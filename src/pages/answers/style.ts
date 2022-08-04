import styled from 'styled-components';
import { AnswerState } from 'src/pages/answers/index';
import { Icon } from 'src/components/icon';
import { sizes } from 'src/theme';

export const AnswersContainer = styled.div`

`;

export const AnswersTitle = styled.h1`
	text-align: center;
	padding-top: 30px;
	font-size: 2em;
	margin: 0px;

	@media screen and (max-width: ${sizes.smallTablet}) {
		font-size: 1.6em;
	}
`;

export const AnswersResultsContainer = styled.div`
	margin-top: 20px;
`;

export const AnswerResultContainer = styled.div`
	color: ${(p): string => p.theme.colors.color};
	border-radius: ${(p): string => p.theme.global.radius};
	background: ${(p): string => p.theme.pages.questions.item.background};
	border: 1px solid ${(p): string => p.theme.pages.questions.item.border};
	padding: 12px;
	width: 100%;
	text-align: left;
	font-size: 1em;
	margin-top: 10px;
`;

export const AnswerResult = styled.div<{ state: AnswerState | null }>`
	margin-bottom: 5px;

	${(p): string => {
        if (p.state === 'error') {
            return `color: ${p.theme.colors.error}`;
        }

        if (p.state === 'success') {
            return `color: ${p.theme.colors.success}`;
        }

        return '';
    }}
`;

export const AnswerIcon = styled(Icon)`
	margin-right: 5px;
`;

export const AnswerResultTitle = styled.div`
	margin-bottom: 5px;
	margin-top: 10px;
`;