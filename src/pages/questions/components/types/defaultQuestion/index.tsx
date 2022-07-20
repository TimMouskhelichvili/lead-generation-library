import React, { ReactElement, useEffect, useState } from 'react';
import { Container } from 'src/pages/questions/components/container';
import { IQuestion } from 'src/interfaces/IQuestion';
import { useStore } from 'src/context';
import { DefaultAnswer } from './style';

/**
 * The DefaultQuestion component.
 */
export const DefaultQuestion = (): ReactElement => {
    const question = useStore(c => c.question);
    const result = useStore(c => c.result);
    const explanation = useExplanation(question);

    const [ selected, handleChange ] = useSelected(question, result);
    const maxLength = isMulti(question) ? Number(question.max) : 1;
    const disabled = selected.length !== maxLength;

    return (
        <Container title={question.title} selected={selected} explanation={explanation} disabled={disabled}>
            {question.answers?.map((answer) => (
                <DefaultAnswer 
                    key={answer.answer} 
                    current={selected.includes(answer.answer)} 
                    onClick={handleChange(answer.answer)}>
                    {answer.answer}
                </DefaultAnswer>
            ))}
        </Container>
    );
};

type HandleChange = (answer: string) => () => void;

/**
 * The selected hook.
 * @param {IQuestion} question - The question. 
 * @param {string[]} result - The result. 
 */
const useSelected = (question: IQuestion, result?: string[]): [ string[], HandleChange ] => {
    const [ selected, setSelected ] = useState<string[]>([]);

    const change = (answer: string) => (): void => {
        const newSelected = [ ...selected ];

        if (selected.includes(answer)) {
            setSelected(newSelected.filter((item) => item !== answer));
        } else if (!isMulti(question)) {
            setSelected([ answer ]);
        } else if (newSelected.length < Number(question.max)) {
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
    const { selectMultipleAnswers, selectOneAnswer } = useStore(c => c.locale);

    if (isMulti(question)) {
        return selectMultipleAnswers.replace('{0}', String(question.max));
    }
    
    return selectOneAnswer;
};

/**
 * Returns if quesion accepts multiple answers.
 * @param {IQuestion} question - The question. 
 */
const isMulti = (question: IQuestion): boolean => Number(question.max) > 1;