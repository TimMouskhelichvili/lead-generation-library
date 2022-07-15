import React, { ReactElement, useState } from 'react';
import { Container } from 'src/pages/questions/components/container';
import { IQuestion } from 'src/interfaces/IQuestion';
import { DefaultAnswer } from './style';

interface IProps {
	question: IQuestion;
}

/**
 * The Default component.
 * @param {IProps} props - The props.
 */
export const Default = (props: IProps): ReactElement => {
    const [ current, setCurrent ] = useState('');

    const handleChange = (answer: string) => (): void => {
        if (answer === current) {
            setCurrent('');
        } else {
            setCurrent(answer);
        }
    };

    return (
        <Container title={props.question.title} current={current}>
            {props.question.answers.map((answer) => (
                <DefaultAnswer 
                    key={answer.answer} 
                    current={current === answer.answer} 
                    onClick={handleChange(answer.answer)}>
                    {answer.answer}
                </DefaultAnswer>
            ))}
        </Container>
    );
};