import React, { ReactElement } from 'react';
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
    return (
        <Container title={props.question.title}>
            {props.question.answers.map((answer) => (
                <DefaultAnswer key={answer.answer}>
                    {answer.answer}
                </DefaultAnswer>
            ))}
        </Container>
    );
};