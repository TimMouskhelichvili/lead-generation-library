import React, { ReactElement, useEffect, useState } from 'react';
import { Container } from 'src/pages/questions/components/container';
import { IQuestion } from 'src/interfaces/IQuestion';
import { useStore } from 'src/context';
import { ErrorField, Input } from './style';
import { validate } from 'jsonschema';

/**
 * The TextQuestion component.
 */
export const TextQuestion = (): ReactElement => {
    const question = useStore(c => c.question);
    const result = useStore(c => c.result);
    
    const [ value, handleChange ] = useValue(question, result);
    const [ showError, error, handleBlur ] = useError(question, value);
    
    const selected = value ? [ value ] : [];

    return (
        <Container title={question.title} selected={selected} disabled={Boolean(error)}>
            <Input
                placeholder={question.placeholder} 
                value={value}
                onBlur={handleBlur}
                onChange={handleChange} />
            <ErrorField>{showError && error}</ErrorField>
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

/**
 * The error hook.
 * @param {IQuestion} question - The question. 
 * @param {IQuestion} value - The value. 
 */
const useError = (question: IQuestion, value: string): [ boolean, string | null, () => void ] => {
    const [ showError, setShowError ] = useState(false); 
    const verify = useVerify(question, value);

    const handleBlur = (): void => setShowError(true);

    return [
        showError,
        verify,
        handleBlur
    ];
};

/**
 * The verify hook.
 * @param {IQuestion} question - The question. 
 * @param {IQuestion} value - The value. 
 */
const useVerify = (question: IQuestion, value: string): string | null => {
    const locale = useStore(c => c.locale);

    if (question.validate === 'email') {
        const res = validate(value, { format: 'email', type: 'string' });
        if (res.errors.length) {
            return locale.invalidEmail;
        }
    }

    return null;
};