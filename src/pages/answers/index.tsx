import React, { ReactElement } from 'react';
import { AnswersList } from 'src/pages/answers/components/list';
import { useDispatch, useStore } from 'src/context';
import { AnswersContainer, AnswersGoBackButton, AnswersGoBack, AnswersResultsContainer, AnswersTitle } from './style';

/**
 * The answers component.
 */
export const Answers = (): ReactElement | null => {
    const dispatch = useDispatch();
    const locale = useStore(c => c.locale);

    const handleGoBack = (): void => {
        dispatch({ type: 'GO_BACK_TO_ANSWERS' });
    };

    return (
        <AnswersContainer>
            <AnswersTitle>
                {locale.answersTitle}
            </AnswersTitle>
            <AnswersResultsContainer>
                <AnswersList />
            </AnswersResultsContainer>
            <AnswersGoBack>
                <AnswersGoBackButton onClick={handleGoBack}>
                    {locale.goBack}
                </AnswersGoBackButton>
            </AnswersGoBack>
        </AnswersContainer>
    );
};