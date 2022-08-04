import React, { ReactElement } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { IQuestion } from 'src/interfaces/IQuestion';
import { useStore } from 'src/context';
import { 
    AnswersContainer, 
    AnswersResultsContainer, 
    AnswersTitle, 
    AnswerResult, 
    AnswerIcon, 
    AnswerResultContainer, 
    AnswerResultTitle 
} from './style';

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
        if (!answers[question.id]) {
            return;
        }

        list.push(
            getAnswer(question, answers[question.id], items[question.id])
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

export type AnswerState = 'error' | 'success';

/**
 * Returns the answer element.
 * @param {IQuestion} question - The question.
 * @param {string[]} answers - The answers.
 * @param {string[]} results - The results.
 */
const getAnswer = (question: IQuestion, answers: string[], results: string[]): ReactElement => {
    return (
        <div>
            <AnswerResultTitle>{question.title}</AnswerResultTitle>
            <AnswerResultContainer key={question.id}>
                {question.answers?.map(answer => {
                    const correct = answers.includes(answer.id);
                    let state: AnswerState | null = null;
                    let icon = null;

                    if (results.includes(answer.id)) {
                        state = correct ? 'success' : 'error';
                        icon = <AnswerIcon icon={correct ? faCheck : faTimes} />;
                    } else if (correct) {
                        icon = <>[Correct Answer]</>;
                    }

                    return (
                        <AnswerResult key={answer.id} state={state}>
                            {icon}
                            {answer.answer}
                        </AnswerResult>
                    );
                })}
            </AnswerResultContainer>	
        </div>
    );
};