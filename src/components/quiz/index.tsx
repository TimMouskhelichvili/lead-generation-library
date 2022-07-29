import React, { ReactElement } from 'react';
import { Status } from 'src/context/interfaces/IContext';
import { useContextUpdates } from 'src/context/updates';
import { Questions } from 'src/pages/questions';
import { Results } from 'src/pages/results';
import { useStore } from 'src/context';
import { Main } from 'src/pages/main';
import { QuizContainer, QuizRow } from './style';

/**
 * The Quiz component.
 */
export const Quiz = (): ReactElement => {
    const status = useStore(c => c.status);

    useContextUpdates();

    const getElementByStatus = (): ReactElement => {
        if ([ Status.Active, Status.Submitting ].includes(status)) {
            return <Questions />;
        } else if (status === Status.Completed) {
            return <Results />;
        }

        return <Main />;
    };

    return (
        <QuizContainer>
            <QuizRow>
                {getElementByStatus()}
            </QuizRow>
        </QuizContainer>
    );
};