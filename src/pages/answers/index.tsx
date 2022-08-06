import React, { ReactElement } from 'react';
import { Answer } from 'src/pages/answers/components/answer';
import { useDispatch, useStore } from 'src/context';
import { AnswersContainer, AnswersGoBack, AnswersResultsContainer, AnswersTitle } from './style';

/**
 * The answers component.
 */
export const Answers = (): ReactElement | null => {
    const questions = useStore(c => c.questions);
    const answers = useStore(c => c.answers);
    const locale = useStore(c => c.locale);
    const { items } = useStore(c => c.results);
    const dispatch = useDispatch();

    if (!answers) {
        return null;
    }

    const handleGoBack = (): void => {
        dispatch({ type: 'GO_BACK_TO_ANSWERS' });
    };

    const list: ReactElement[] = [];
    questions.forEach(question => {
        list.push(
            <Answer
                key={question.id} 
                question={question} 
                answers={answers[question.id]} 
                results={items[question.id]} />
        );
    });

    return (
        <AnswersContainer>
            <AnswersTitle>
                {locale.answersTitle}
            </AnswersTitle>
            <AnswersResultsContainer>
                {list}
            </AnswersResultsContainer>
            <AnswersGoBack>
                <span onClick={handleGoBack}>{locale.goBack}</span>
            </AnswersGoBack>
        </AnswersContainer>
    );
};