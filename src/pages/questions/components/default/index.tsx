import React, { ReactElement, useEffect, useState } from 'react';
import { Container } from 'src/pages/questions/components/container';
import { IQuestion } from 'src/interfaces/IQuestion';
import { useStore } from 'src/context';
import { DefaultAnswer } from './style';

/**
 * The Default component.
 */
export const Default = (): ReactElement => {
    const question = useStore(c => c.question);
    const result = useStore(c => c.result);
    const locale = useStore(c => c.locale);
	
    const [ selected, handleChange ] = useSelected(question, result);

    return (
        <Container title={question.title} selected={selected} explanation={locale.selectOneAnswer}>
            {question.answers.map((answer) => (
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
        } else {
            setSelected([ answer ]);
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