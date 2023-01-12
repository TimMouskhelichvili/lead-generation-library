import React, { ReactElement, useEffect, useState } from 'react';
import { Container } from 'src/pages/questions/components/container';
import { IQuestion } from 'src/interfaces/IQuestion';
import { IAnswer } from 'src/interfaces/IAnswer';
import { useStore } from 'src/context';
import { DefaultAnswer, DefaultImg, DefaultDescription } from './style';

/**
 * The DefaultQuestion component.
 */
export const DefaultQuestion = (): ReactElement => {
    const question = useStore(c => c.question);
    const result = useStore(c => c.result);
    const explanation = useExplanation(question);

    const [ selected, handleChange ] = useSelected(question, result);

    const disabled = selected.length < getMin(question) || selected.length > getMax(question);

    return (
        <Container title={question.title} selected={selected} explanation={explanation} disabled={disabled}>
            {question.answers?.map((answer, index) => {
                const before = question.before?.replace('{0}', String(index + 1));

                return (
                    <DefaultAnswer
                        key={answer.id}
                        current={selected.includes(answer.id)} 
                        onClick={handleChange(answer.id)}
                        type='button'>
                        {getAnswer(answer, before)}
                    </DefaultAnswer>
                );
            })}
        </Container>
    );
};

/**
 * Returns the answer element.
 * @param {IAnswer} answer - The answer.
 * @param {string?} before - The before.
 */
const getAnswer = (answer: IAnswer, before?: string): ReactElement => (
    <>
        {answer.image &&
			<DefaultImg src={answer.image} alt={answer.answer} />}
        {before}{answer.answer}
        {answer.description &&
			<DefaultDescription dangerouslySetInnerHTML={{ __html: answer.description }} />}
    </>
);

/**
 * The selected hook.
 * @param {IQuestion} question - The question. 
 * @param {string[]} result - The result. 
 */
const useSelected = (question: IQuestion, result?: string[]): [ string[], (answer: string) => () => void ] => {
    const [ selected, setSelected ] = useState<string[]>([]);
    const status = useStore(c => c.status);

    const change = (answer: string) => (): void => {
        if (status === 'SUBMITTING') {
            return;
        }

        const newSelected = [ ...selected ];

        const max = Math.max(getMin(question), getMax(question));

        if (selected.includes(answer)) {
            setSelected(newSelected.filter((item) => item !== answer));
        } else if (!isMulti(question)) {
            setSelected([ answer ]);
        } else if (newSelected.length < max) {
            setSelected([ answer, ...newSelected ]);	
        }
    };

    useEffect(() => {
        setSelected([]);
    }, [ question ]);

    useEffect(() => {
        if (!result) {
            return;
        }

        setSelected(result);
    }, [ result ]);

    return [
        selected,
        change
    ];
};

/**
 * The explanation hook.
 * @param {IQuestion} question - The question. 
 */
const useExplanation = (question: IQuestion): string => {
    const locale = useStore(c => c.locale);

    const max = getMax(question);
    const min = getMin(question);

    const hasMax = max > 1;
    const hasMin = min > 1;

    if (hasMax && hasMin && max > min) {
        return locale.selectAnswersFromTo
            .replace('{0}', String(question.min))
            .replace('{1}', String(question.max));
    } else if (hasMin) {
        return locale.selectAnswers.replace('{0}', String(question.min));
    } else if (hasMax) {
        return locale.selectAnswersUpTo.replace('{0}', String(question.max));
    }
    
    return locale.selectOneAnswer;
};

/**
 * Returns if question accepts multiple answers.
 * @param {IQuestion} question - The question.
 */
const isMulti = (question: IQuestion): boolean => {
    return getMax(question) > 1 || getMin(question) > 1;
};

/**
 * Returns the maximum number of accepted answers.
 * @param {IQuestion} question - The question.
 */
const getMax = (question: IQuestion): number => question.max || question.min || 1;

/**
 * Returns the minimum number of accepted answers.
 * @param {IQuestion} question - The question.
 */
const getMin = (question: IQuestion): number => question.min || 1;