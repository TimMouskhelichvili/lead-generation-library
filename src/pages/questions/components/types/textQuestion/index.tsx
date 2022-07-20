import React, { ReactElement, useState } from 'react';
import { Container } from 'src/pages/questions/components/container';
import { useStore } from 'src/context';
import { Input } from './style';

/**
 * The TextQuestion component.
 */
export const TextQuestion = (): ReactElement => {
    const [ value, setValue ] = useState(''); 
    const question = useStore(c => c.question);
    const selected = value ? [ value ] : [];
    const disabled = !value;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    };

    return (
        <Container title={question.title} selected={selected} disabled={disabled}>
            <Input 
                placeholder={question.placeholder} 
                value={value} 
                onChange={handleChange} />
        </Container>
    );
};