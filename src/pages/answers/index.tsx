import React, { ReactElement } from 'react';
import { Answer } from 'src/pages/answers/components/answer';
import { useStore } from 'src/context';
import { AnswersContainer, AnswersResultsContainer, AnswersTitle } from './style';

/**
 * The answers component.
 */
export const Answers = (): ReactElement | null => {
    const questions = useStore(c => c.questions);
    const answers = useStore(c => c.answers);
    const locale = useStore(c => c.locale);
    const { items } = useStore(c => c.results);

    if (!answers) {
        return null;
    }

    const list: ReactElement[] = [];
    questions.forEach(question => {
        list.push(
            <Answer 
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
        </AnswersContainer>
    );
};