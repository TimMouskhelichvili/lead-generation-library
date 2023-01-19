import React, { ReactElement } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { IQuestion } from 'src/interfaces/IQuestion';
import { Icon } from 'src/components/icon';
import { useStore } from 'src/context';
import { AnswerResult, AnswerSpan, AnswerResultContainer, AnswerResultTitle } from './style';

export type AnswerState = 'error' | 'success' | 'correct';

interface IAnswerProps {
	index: number;
	question: IQuestion;
	answers: string[];
	results: string[];
}

/**
 * The answer component.
 * @param {IAnswerProps} props - The props.
 */
export const Answer = (props: IAnswerProps): ReactElement => {
    const locale = useStore(c => c.locale);
    const before = '{0}. '.replace('{0}', String(props.index + 1));

    return (
        <div>
            <AnswerResultTitle>{before}{props.question.title}</AnswerResultTitle>
            <AnswerResultContainer key={props.question.id}>
                {props.question.answers?.map(answer => {
                    const correct = props.answers?.includes(answer.id);
                    let state: AnswerState | null = null;
                    let icon = null;

                    if (props.results.includes(answer.id)) {
                        state = correct ? 'success' : 'error';
                        icon = (
                            <AnswerSpan>
                                <Icon icon={correct ? faCheck : faTimes} />
                            </AnswerSpan>
                        );
                    } else if (correct) {
                        state = 'correct';
                        icon = <AnswerSpan>{locale.correctAnswer}</AnswerSpan>;
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