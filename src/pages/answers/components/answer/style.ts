import styled from 'styled-components';
import { AnswerState } from 'src/pages/answers/components/answer';

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
	&:not(:last-of-type) {
		margin-bottom: 7px;
	}

	${(p): string => {
        if (p.state === 'error') {
            return `color: ${p.theme.colors.error}`;
        }

        if (p.state === 'success') {
            return `color: ${p.theme.colors.success}`;
        }

        if (p.state === 'correct') {
            return 'font-weight: bold';
        }

        return '';
    }}
`;

export const AnswerSpan = styled.span`
	margin-right: 5px;
	display: inline-block;
`;

export const AnswerResultTitle = styled.div`
	margin-bottom: 5px;
	margin-top: 10px;
`;