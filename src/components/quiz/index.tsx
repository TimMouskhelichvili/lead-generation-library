import React, { ReactElement } from 'react';
import { useContextUpdates } from 'src/context/updates';
import { Questions } from 'src/pages/questions';
import { Results } from 'src/pages/results';
import { Answers } from 'src/pages/answers';
import { useStore } from 'src/context';
import { Main } from 'src/pages/main';
import { QuizContainer, QuizRow } from './style';

/**
 * The Quiz component.
 */
export const Quiz = (): ReactElement => {
    const status = useStore(c => c.status);
    const styles = useStore(c => c.styles);

    useContextUpdates();

    const getElementByStatus = (): ReactElement => {
        if (status === 'ACTIVE' || status === 'SUBMITTING') {
            return <Questions />;
        } else if (status === 'COMPLETED') {
            return <Results />;
        } else if (status === 'VIEWING_ANSWERS') {
            return <Answers />;
        }

        return <Main />;
    };

    return (
        <QuizContainer styles={styles}>
            <QuizRow>
                {getElementByStatus()}
            </QuizRow>
        </QuizContainer>
    );
};