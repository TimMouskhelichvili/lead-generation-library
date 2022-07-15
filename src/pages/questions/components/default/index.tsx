import React, { ReactElement, useEffect, useState } from 'react';
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
    const [ selected, setSelected ] = useState<string[]>([]);

    const handleChange = (answer: string) => (): void => {
        const newSelected = [ ...selected ];

        if (selected.includes(answer)) {
            setSelected(newSelected.filter((item) => item !== answer));
        } else {
            setSelected([ answer ]);
        }
    };

    useEffect(() => {
        setSelected([]);
    }, [ props ]);

    return (
        <Container title={props.question.title} selected={selected}>
            {props.question.answers.map((answer) => (
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