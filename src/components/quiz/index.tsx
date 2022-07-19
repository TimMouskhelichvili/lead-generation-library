import React, { ReactElement } from 'react';
import { useContextUpdates } from 'src/context/updates';
import { Questions } from 'src/pages/questions';
import { useStore } from 'src/context';
import { Main } from 'src/pages/main';
import { QuizContainer, QuizRow } from './style';

/**
 * The Quiz component.
 */
export const Quiz = (): ReactElement => {
    const started = useStore(c => c.started);

    useContextUpdates();

    return (
        <QuizContainer>
            <QuizRow>
                {!started ? 
                    <Main /> : <Questions />}
            </QuizRow>
        </QuizContainer>
    );
};