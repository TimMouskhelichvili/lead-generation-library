import React, { ReactElement } from 'react';
import { useStore } from 'src/context';
import { AnswersContainer, AnswersTitle } from './style';

/**
 * The answers component.
 */
export const Answers = (): ReactElement => {
    const locale = useStore(c => c.locale);

    return (
        <AnswersContainer>
            <AnswersTitle>{locale.answersTitle}</AnswersTitle>
        </AnswersContainer>
    );
};