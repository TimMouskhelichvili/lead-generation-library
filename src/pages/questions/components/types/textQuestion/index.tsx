import React, { ReactElement, useEffect, useState } from 'react';
import { Container } from 'src/pages/questions/components/container';
import { IQuestion } from 'src/interfaces/IQuestion';
import { useStore } from 'src/context';
import { Input } from './style';

/**
 * The TextQuestion component.
 */
export const TextQuestion = (): ReactElement => {
    const question = useStore(c => c.question);
    const result = useStore(c => c.result);
    const [ value, handleChange ] = useValue(question, result);
 
    const selected = value ? [ value ] : [];
    const disabled = !value;

    return (
        <Container title={question.title} selected={selected} disabled={disabled}>
            <Input 
                placeholder={question.placeholder} 
                value={value}
                onChange={handleChange} />
        </Container>
    );
};

type HandleType = (e: React.ChangeEvent<HTMLInputElement>) => void;

/**
 * The value hook.
 * @param {IQuestion} question - The question. 
 * @param {string[]} result - The result. 
 */
const useValue = (question: IQuestion, result?: string[]): [ string, HandleType ] => {
    const [ value, setValue ] = useState(''); 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    };

    useEffect(() => {
        setValue('');
    }, [ question ]);

    useEffect(() => {
        if (!result) {
            return;
        }

        setValue(result[0]);
    }, [ result ]);

    return [
        value,
        handleChange
    ];
};