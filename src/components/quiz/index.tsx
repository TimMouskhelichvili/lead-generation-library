import React, { ReactElement } from 'react';
import { Questions } from 'src/pages/questions';
import { useStore } from 'src/context';
import { Main } from 'src/pages/main';
import { QuizContainer } from './style';

/**
 * The Quiz component.
 */
export const Quiz = (): ReactElement => {
    const started = useStore(c => c.started);

    return (
        <QuizContainer>
            {!started ? <Main /> : <Questions />}
        </QuizContainer>
    );
};