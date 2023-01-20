import React, { ReactElement } from 'react';
import { getFilteredQuestions } from 'src/utils/questions';
import { useStore } from 'src/context';
import { StyledHeader } from './style';

/**
 * The QuestionsHeader component.
 */
export const QuestionsHeader = (): ReactElement | null => {
    const current = useStore(c => c.current);
    const questions = useStore(c => c.questions);
    const question = useStore(c => c.question);
    const locale = useStore(c => c.locale);

    const num = locale.questionNum
        .replace('{0}', String(current + 1))
        .replace('{1}', String(getFilteredQuestions(questions).length));

    if (question.hideFromResults) {
        return null;
    }
    
    return <StyledHeader>{num}</StyledHeader>;
};